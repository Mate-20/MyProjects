package com.notes.enotes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.notes.enotes.dao.UserDao;
import com.notes.enotes.entites.User;

@Component
public class UserServiceImpl{
    
    @Autowired
    private UserDao userDao;

    // Finding the users
    public List<User> findUsers(){
        List<User> list = (List<User>)userDao.findAll();
        return list;
    }
}
