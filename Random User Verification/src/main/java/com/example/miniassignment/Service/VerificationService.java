package com.example.miniassignment.Service;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class VerificationService {

    // Will check the verification Status of the User
    public String verification(String randomNationality,String randomGender, List<String> nationalities,String gender){
        String ans = "TO_BE_VERIFIED";

        // If any field is empty
        if(gender == null || nationalities.size() == 0){
            return "TO_BE_VERIFIED";
        }

        // If gender is not equal
        if(gender.equals(randomGender) == false){
            return "TO_BE_VERIFIED";
        }
        
        // If nationality is not present
        for(String nat : nationalities){
            if(nat.equals(randomNationality)){
                return "VERIFIED";
            }
        }
        return ans;
    }
}
