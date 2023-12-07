package com.example.miniassignment.Service;

import org.springframework.stereotype.Component;

import com.example.miniassignment.Validators.EnglishAlphabetsValidator;
import com.example.miniassignment.Validators.NumericValidator;

@Component
public class ValidateService {
    public boolean validate(String sortType, String sortOrder, int limit, int offset){
        NumericValidator numericValidator = NumericValidator.getInstance();
        EnglishAlphabetsValidator alphabetsValidator = EnglishAlphabetsValidator.getInstance();
        
        // Checking through Singleton classes
        if (!alphabetsValidator.isEnglishAlphabets(sortType) || !alphabetsValidator.isEnglishAlphabets(sortOrder)) { 
            return false;
        }

        if (!numericValidator.isNumeric(String.valueOf(limit)) || !numericValidator.isNumeric(String.valueOf(offset))) {
            return false;
        }
        return true;
    }
}
