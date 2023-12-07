package com.example.miniassignment.Data;

// Result class consiting of fields to be returned
public class Result {
    private String gender;
    private Name name;
    private String nat;
    private Dob dob;
    public Result(){

    }
    public Result(String gender, Name name,String nat) {
        this.gender = gender;
        this.name = name;
        this.nat = nat;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Name getName() {
        return name;
    }
    public void setName(Name name) {
        this.name = name;
    }

    public String getNat() {
        return nat;
    }
    public void setNat(String nat) {
        this.nat = nat;
    }
    public Dob getDob() {
        return dob;
    }
    public void setDob(Dob dob) {
        this.dob = dob;
    }
    
}
