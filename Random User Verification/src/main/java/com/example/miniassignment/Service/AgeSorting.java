package com.example.miniassignment.Service;

import java.util.*;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import com.example.miniassignment.Entity.User;

// Will sort the data according to age 
@Component
public class AgeSorting implements SortInterface {

    // If the sortOrder is even
    @Override
    public List<User> evenSort(List<User> list) {
        Comparator<User> ageComparator = Comparator.comparing(User::getAge);

        // Filtering data with even ages
        List<User> evenAges = list.stream().filter(user -> user.getAge() % 2 == 0).sorted(ageComparator)
                .collect(Collectors.toList());

        // Filtering data with odd ages
        List<User> oddAges = list.stream().filter(user -> user.getAge() % 2 != 0).sorted(ageComparator)
                .collect(Collectors.toList());

        // Adding even ages data then odd ages data                
        evenAges.addAll(oddAges);
        return evenAges;
    }

    // If the sortOrder is odd
    @Override
    public List<User> oddSort(List<User> list) {
        Comparator<User> ageComparator = Comparator.comparing(User::getAge);

        // Filtering data with even ages
        List<User> evenAges = list.stream().filter(user -> user.getAge() % 2 == 0).sorted(ageComparator).collect(Collectors.toList());

         // Filtering data with odd ages
        List<User> oddAges = list.stream().filter(user -> user.getAge() % 2 != 0).sorted(ageComparator).collect(Collectors.toList());

        // Adding odd ages data then even ages data               
        oddAges.addAll(evenAges);
        return oddAges;
    }

}
