package com.exittest.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.exittest.backend.dao.AuthDao;
import com.exittest.backend.entites.Auth;

@Component
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthDao authDao;

    @Override
    public List<Auth> getDetails() {
        List<Auth> authList =(List<Auth>)authDao.findAll();
        return authList;
    }
    @Override
    public void setDetails(Auth auth) {
        authDao.save(auth);
    }
    
}
