package com.example.miniassignment.Service;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.miniassignment.Data.Gender;

@Component
public class GenderService {
    public String fetchGender(String name) {

        // Fetching gender with web client using Api 3
        WebClient webClient = WebClient.create();

        String api3 = "https://api.genderize.io/?name=" + name;
        Gender response = webClient.get().uri(api3).retrieve().bodyToMono(Gender.class).block();

        String gender = response.getGender();

        return gender;

    }
}
