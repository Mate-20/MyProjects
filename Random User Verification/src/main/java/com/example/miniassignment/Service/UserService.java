package com.example.miniassignment.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.*;
import java.util.stream.Collectors;

import com.example.miniassignment.Dao.UserDao;
import com.example.miniassignment.Entity.PageInfo;
import com.example.miniassignment.Entity.User;
import com.example.miniassignment.Entity.UserWrapper;

@Component
public class UserService {

    @Autowired
    UserDao userDao;

    @Autowired
    RandomUserService randomUserService;

    @Autowired
    ValidateService validateService;

    @Autowired
    SortService sortService;

    // Save user method
    public User saveUser() {
        try {

            // Fetching random user
            User user = randomUserService.fetchRandomUser();

            // Saving user to database
            userDao.save(user);
            return user;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Will return Wrapper class consisting of User and Page info
    public List<UserWrapper> getUsers(String sortType, String sortOrder, int limit, int offset) {
        List<User> users = new ArrayList<>();

        // Validating the Sort type and Sort order
        boolean check = validateService.validate(sortType, sortOrder, limit, offset); // If it validates then we will proceed further

        List<User> currList = new ArrayList<>();
        if (check) {

            // Fetching all the data from database
            currList = (List<User>) userDao.findAll();
            try {

                // Doing the offset to whole data
                if (offset >= 0 && offset < currList.size()) {
                    currList = currList.subList(offset, currList.size());
                } else {
                    throw new NullPointerException();
                }
                // Sorting data according to Sort Type and Sort Order
                users = sortService.sort(sortType, sortOrder, currList);
                
                // Putting the limit to sorted data
                if (limit >= 1 && limit <= 5 && limit < users.size()) {
                    users = users.subList(0, limit);
                } else {
                    throw new NullPointerException();
                }
               
            } catch (Exception e) {
                throw e;
            }
        }

        // Calling getPageInfo to get page info for every user
        List<UserWrapper> ans = getPageInfo(users, currList.size());
        return ans;
    }

    public List<UserWrapper> getPageInfo(List<User> list, int total) {
        List<UserWrapper> ans = list.stream()
                .map(user -> {
                    boolean hasNextPage = true;
                    boolean hasPrevPage = true;

                    // If the User is first in database
                    if (user.getUser_id() == 1) {
                        hasPrevPage = false;
                    }

                    // If the User is last in database
                    if (user.getUser_id() == total) {
                        hasNextPage = false;
                    }

                    PageInfo pageInfo = new PageInfo(hasNextPage, hasPrevPage, total);
                    return new UserWrapper(user, pageInfo);
                })
                .collect(Collectors.toList());

        return ans;
    }

}
