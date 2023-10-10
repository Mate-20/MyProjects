package com.notes.enotes.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.notes.enotes.entites.Notes;
import com.notes.enotes.entites.User;
import com.notes.enotes.service.NotesServiceImpl;
import com.notes.enotes.service.UserServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HomeController {       
    
    @Autowired
    private UserServiceImpl userServiceImpl;
    @Autowired
    private NotesServiceImpl notesServiceImpl;

    @GetMapping("/login")
    public List<User> login(){            
        List<User> list = userServiceImpl.findUsers();                   
        return list;
    }       

    @GetMapping("/notes/{user_id}")
    public List<Notes> findNotesById(@PathVariable int user_id){
        List<Notes> list = notesServiceImpl.findNotes(user_id);
        return list;
    }

    @DeleteMapping("/notes/delete/{id}")
    public Notes deleteNote(@PathVariable int id){
        Notes note = notesServiceImpl.deleteNote(id);
        return note;
    }

    @PostMapping("/add")
    public void addNote(@RequestBody Notes note){
        notesServiceImpl.addNote(note);
    }
}
