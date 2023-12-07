package com.example.miniassignment.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.miniassignment.Data.CustomError;
import com.example.miniassignment.Data.Size;
import com.example.miniassignment.Entity.User;
import com.example.miniassignment.Entity.UserWrapper;
import com.example.miniassignment.Service.UserService;

@RestController
public class HomeController {

    @Autowired
    UserService userService;

    @PostMapping("/users")
    public ResponseEntity<?> addUsers(@RequestBody Size sizes) {
        List<User> ans = new ArrayList<>();
        int size = sizes.getSize();
        // Users added should be 1 to 5
        if (size >= 1 && size <= 5) {
            for (int i = 0; i < size; i++) {
                // Calling the save user method from service class
                User user = userService.saveUser();
                ans.add(user);
            }
        }else{
            CustomError error = new CustomError("Size Not in range", HttpStatus.NOT_FOUND.value());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }
        return ResponseEntity.ok(ans);
    }

    // Getting Users
    @GetMapping("/users/{sortType}/{sortOrder}/{limit}/{offset}")
    public ResponseEntity<?> getUsers(@PathVariable String sortType,
            @PathVariable String sortOrder,
            @PathVariable int limit,
            @PathVariable int offset) {
        try {

            // Calling get users method from user service
            List<UserWrapper> users = userService.getUsers(sortType, sortOrder, limit, offset);
            return ResponseEntity.ok(users);
        } catch (Exception e) {

            // Catching the exception if URL entered is wrong
            CustomError error = new CustomError("Page Not Found", HttpStatus.NOT_FOUND.value());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }
    }
}
