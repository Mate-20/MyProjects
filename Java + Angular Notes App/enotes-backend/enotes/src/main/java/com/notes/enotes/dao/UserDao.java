package com.notes.enotes.dao;

import org.springframework.data.repository.CrudRepository;

import com.notes.enotes.entites.User;

public interface UserDao extends CrudRepository<User,Integer> {
    
}
