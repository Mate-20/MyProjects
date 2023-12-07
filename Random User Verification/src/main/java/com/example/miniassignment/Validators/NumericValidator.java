package com.example.miniassignment.Validators;

public class NumericValidator {

    private static NumericValidator instance = null;

    private NumericValidator() {
        
    }

    public static NumericValidator getInstance() {
        if (instance == null) {
            synchronized (NumericValidator.class) {
                if (instance == null) {
                    instance = new NumericValidator();
                }
            }
        }
        return instance;
    }

    public boolean isNumeric(String str) {
        return str.matches("-?\\d+(\\.\\d+)?"); // Check if the string is a number
    }
}
