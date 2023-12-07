package com.example.miniassignment.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import com.example.miniassignment.Data.Dob;
import com.example.miniassignment.Data.Name;
import com.example.miniassignment.Data.RandomUser;
import com.example.miniassignment.Data.Result;
import com.example.miniassignment.Entity.User;

@Component
public class RandomUserService {

    @Autowired
    DateService dateService;

    @Autowired
    Executor executor;

    // Fetching random user using web client with Api 1
    public User fetchRandomUser() {
        WebClient webClient = WebClient.create();
        String api1 = "https://randomuser.me/api/";

        RandomUser response = webClient.get().uri(api1).retrieve().bodyToMono(RandomUser.class).block();
        
        User user = new User();
        
        // Chceking is result is there or not
        if (response != null && response.getResults() != null && !response.getResults().isEmpty()) {
        Result result = response.getResults().get(0);
        String gender = result.getGender();
        Name randomName = result.getName();
        String firstName = randomName.getFirst();
        String lastName = randomName.getLast();
        String nationality = result.getNat();
        Dob dob = result.getDob();
        String dateDob = dob.getDate();
        int age = dob.getAge();

        // Calling executor to make 2 Api calls Parallely
        String verify = executor.fetchDataInParallel(firstName,nationality,gender);
        
        // GETTING DATE
        String date_created = dateService.getDate();
            
        // Setting the user with all the fields
        user.setName(firstName+" "+lastName);
        user.setGender(gender);
        user.setDob(dateDob);
        user.setAge(age);
        user.setNationality(nationality);
        user.setVerification_status(verify);
        user.setDate_created(date_created);
        user.setDate_modifed(date_created);
        }
        return user;
    }

}
