package com.example.miniassignment.Data;

import java.time.LocalDateTime;

// Custom error Class
public class CustomError {
    private String message;
    private int code;
    private LocalDateTime timestamp;

    public CustomError(String message, int code) {
        this.message = message;
        this.code = code;
        this.timestamp = LocalDateTime.now();
    }

}
