package com.example.miniassignment.Service;

import java.util.List;

import com.example.miniassignment.Entity.User;

public interface SortInterface {
    public List<User> evenSort(List<User> list);
    public List<User> oddSort(List<User> list);
}
