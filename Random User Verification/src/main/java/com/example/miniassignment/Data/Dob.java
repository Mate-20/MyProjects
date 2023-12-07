package com.example.miniassignment.Data;

// Class for mapping Dob field in Json Result
public class Dob {
    private String date;
    private int age;
    
    public Dob() {
    }
    public Dob(String date, int age) {
        this.date = date;
        this.age = age;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    
}
