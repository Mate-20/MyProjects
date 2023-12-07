package com.example.miniassignment.Validators;

public class EnglishAlphabetsValidator {

    private static EnglishAlphabetsValidator instance = null;

    private EnglishAlphabetsValidator() {
        // Private constructor to prevent instantiation
    }

    public static EnglishAlphabetsValidator getInstance() {
        if (instance == null) {
            synchronized (EnglishAlphabetsValidator.class) {
                if (instance == null) {
                    instance = new EnglishAlphabetsValidator();
                }
            }
        }
        return instance;
    }

    public boolean isEnglishAlphabets(String str) {
        return str.matches("[a-zA-Z]+"); // Check if the string contains only English alphabets
    }
}
