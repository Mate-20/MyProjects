package com.example.miniassignment.Data;

import java.util.List;

// Class for mapping Nationality field in Json Result
public class Nationality {
    private List<Country> country;

    public List<Country> getCountry() {
        return country;
    }

    public void setCountry(List<Country> country) {
        this.country = country;
    }
}
