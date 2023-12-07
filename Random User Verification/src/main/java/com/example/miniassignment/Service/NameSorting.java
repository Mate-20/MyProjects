package com.example.miniassignment.Service;

import java.util.*;
import java.util.stream.Collectors;
import org.springframework.stereotype.Component;
import com.example.miniassignment.Entity.User;

// Will sort the data according to name 
@Component
public class NameSorting implements SortInterface  {

    // If the sort Order is even
    @Override
    public List<User> evenSort(List<User> list) {
        Comparator<User> nameLengthComparator = Comparator.comparing(user -> user.getName().replaceAll("\\s", "").length());

        // Filtering data with Odd length names
        List<User> oddLengthNames = list.stream().filter(user -> user.getName().replaceAll("\\s", "").length() % 2 != 0).sorted(nameLengthComparator).collect(Collectors.toList());

        // Filtering data with Even length names
        List<User> evenLengthNames = list.stream().filter(user -> user.getName().replaceAll("\\s", "").length() % 2 == 0).sorted(nameLengthComparator).collect(Collectors.toList());

        
        evenLengthNames.addAll(oddLengthNames);
        return evenLengthNames;
    }

    // If the sort Order is odd
    @Override
    public List<User> oddSort(List<User> list) {
        Comparator<User> nameLengthComparator = Comparator.comparing(user -> user.getName().replaceAll("\\s", "").length());

        // Filtering data with Odd length names
        List<User> oddLengthNames = list.stream().filter(user -> user.getName().replaceAll("\\s", "").length() % 2 != 0).sorted(nameLengthComparator).collect(Collectors.toList());

         // Filtering data with Even length names
        List<User> evenLengthNames = list.stream().filter(user -> user.getName().replaceAll("\\s", "").length() % 2 == 0).sorted(nameLengthComparator).collect(Collectors.toList());
        
        // Adding odd length names then even length names
        oddLengthNames.addAll(evenLengthNames);
        return oddLengthNames;
    }
    
}
