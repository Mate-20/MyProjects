package com.example.miniassignment.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    private String name;

    private int age;

    private String gender;

    private String dob;

    private String nationality;

    private String verification_status;

    private String date_created;

    private String date_modifed;

    public User() {
    }

    public User(int user_id, String name, int age, String gender, String dob, String nationality,
            String verification_status,
            String date_created, String date_modifed) {
        this.user_id = user_id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.nationality = nationality;
        this.verification_status = verification_status;
        this.date_created = date_created;
        this.date_modifed = date_modifed;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getVerification_status() {
        return verification_status;
    }

    public void setVerification_status(String verification_status) {
        this.verification_status = verification_status;
    }

    public String getDate_created() {
        return date_created;
    }

    public void setDate_created(String date_created) {
        this.date_created = date_created;
    }

    public String getDate_modifed() {
        return date_modifed;
    }

    public void setDate_modifed(String date_modifed) {
        this.date_modifed = date_modifed;
    }

    @Override
    public String toString() {
        return "User [id=" + user_id + ", name=" + name + ", age=" + age + ", gender=" + gender + ", dob=" + dob
                + ", nationality=" + nationality + ", verification_status=" + verification_status + ", date_created="
                + date_created + ", date_modifed=" + date_modifed + "]";
    }

}
