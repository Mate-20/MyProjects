package com.example.miniassignment.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.example.miniassignment.Entity.User;

@Component
public class SortService {

    @Autowired
    AgeSorting ageSorting;

    @Autowired
    NameSorting nameSorting;

    public List<User> sort(String sortType, String sortOrder, List<User> list){
        List<User> ans = new ArrayList<>();
        if(sortType.equals("age") && sortOrder.equals("even")){
            ans = ageSorting.evenSort(list);
        }else if (sortType.equals("age") && sortOrder.equals("odd")) {
            ans = ageSorting.oddSort(list);
        }else if(sortType.equals("name") && sortOrder.equals("even")){
            ans = nameSorting.evenSort(list);
        }else if(sortType.equals("name") && sortOrder.equals("odd")){
            ans = nameSorting.oddSort(list);
        }else{
            throw new NullPointerException();
        }
        return ans;
    }
}
