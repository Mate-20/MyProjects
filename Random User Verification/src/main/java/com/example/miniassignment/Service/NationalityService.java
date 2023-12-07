package com.example.miniassignment.Service;

import java.util.List;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import com.example.miniassignment.Data.Country;
import com.example.miniassignment.Data.Nationality;


@Component
public class NationalityService {
    public List<String> fetchNats(String name){

        // Fetching Nationalities with web client using Api 2
        WebClient webClient = WebClient.create();
        String api2 = "https://api.nationalize.io/?name=" + name;
        Nationality response = webClient.get().uri(api2).retrieve().bodyToMono(Nationality.class).block();

        List<String> countryIDs = null;

        List<Country> countries = response.getCountry();
            countryIDs = countries.stream()
                                  .map(Country::getCountry_id)
                                  .toList();
        return countryIDs;
    }
}
