package com.example.miniassignment.Data;

import java.util.List;

public class RandomUser {
    private List<Result> results;
    public RandomUser(){

    }
    public RandomUser(List<Result> results) {
        this.results = results;
    }
    public List<Result> getResults() {
        return results;
    }
    public void setResults(List<Result> results) {
        this.results = results;
    }
    
    
}
