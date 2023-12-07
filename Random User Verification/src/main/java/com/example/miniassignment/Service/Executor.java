package com.example.miniassignment.Service;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Executor {

    @Autowired
    NationalityService nationalityService;

    @Autowired
    GenderService genderService;

    @Autowired
    VerificationService verificationService;

    // Will fetch results of 2 API's in Parallel
    public String fetchDataInParallel(String firstName, String nationality, String gender) {
        ExecutorService executor = Executors.newFixedThreadPool(2); // Create an executor with 2 threads

        // Calling fetch natioanltiy function from Natioanlity service
        CompletableFuture<List<String>> nationalityFuture = CompletableFuture.supplyAsync(() -> {
            return nationalityService.fetchNats(firstName);
        }, executor);

        // Calling fetch gender function from gender service
        CompletableFuture<String> genderFuture = CompletableFuture.supplyAsync(() -> {
            return genderService.fetchGender(firstName);
        }, executor);

        CompletableFuture<Void> combinedFuture = CompletableFuture.allOf(nationalityFuture, genderFuture);
        CompletableFuture<String> verificationFuture = combinedFuture.thenComposeAsync(result -> {
            try {
                List<String> nationalities = nationalityFuture.get(); // Retrieve result of API 2
                String genderCheck = genderFuture.get(); // Retrieve result of API 3
                System.out.println(nationalities);
                System.out.println(genderCheck);
                return CompletableFuture.supplyAsync(() ->
                        verificationService.verification(nationality, gender, nationalities, genderCheck), executor);
            } catch (Exception e) {
                e.printStackTrace();
                return CompletableFuture.completedFuture("Verification Failed"); // Handle error case
            } finally {
                executor.shutdown(); // Shutdown the executor when done
            }
        }, executor);

        try {
            return verificationFuture.get(); // Return the verification result
        } catch (Exception e) {
            e.printStackTrace();
            return "Verification Failed"; // Handle error case
        }
    }
}
