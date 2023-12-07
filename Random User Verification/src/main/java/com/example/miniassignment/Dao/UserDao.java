package com.example.miniassignment.Dao;

import org.springframework.data.repository.CrudRepository;

import com.example.miniassignment.Entity.User;

public interface UserDao extends CrudRepository<User,Integer> {
    
}
