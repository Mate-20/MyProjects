package com.example.miniassignment.Service;

import java.util.*;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;

@Component
public class DateService {
    public String getDate() {

        // Getting current date to enter in database
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Date date = new Date();
        String currdate = formatter.format(date);
        return currdate;
    }
}
