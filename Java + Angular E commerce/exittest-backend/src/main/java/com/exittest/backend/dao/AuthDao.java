package com.exittest.backend.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import com.exittest.backend.entites.Auth;


@Component
public interface AuthDao extends CrudRepository<Auth,Integer> {
    // custome finder method
    public Auth findByEmail(String email);
    public Auth findByName(String name);

}
