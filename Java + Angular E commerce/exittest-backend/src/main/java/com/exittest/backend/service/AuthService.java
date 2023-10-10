package com.exittest.backend.service;

import java.util.List;
import com.exittest.backend.entites.Auth;

public interface AuthService {
    public List<Auth> getDetails();
    public void setDetails(Auth auth);
}