package com.notes.enotes;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.notes.enotes.dao.NotesDao;
import com.notes.enotes.dao.UserDao;
import com.notes.enotes.entites.User;
import com.notes.enotes.entites.Notes;

@SpringBootApplication
@EnableScheduling
public class EnotesApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(EnotesApplication.class, args);
		// UserDao userDao = context.getBean(UserDao.class);
		// NotesDao notesDao  = context.getBean(NotesDao.class);
		// Notes note = new Notes();
		// note.setTitle("First note");
		// note.setContent("Content for first note");
		// note.setUserId(1);
		// Notes savedNote = notesDao.save(note);
		// notesDao.deleteById(4);

		// User user1= new User();
		// user1.setUsername("Akkijin");
		// user1.setPassword("Akash");

		// List<Notes> list = new ArrayList<>();
		// Notes notes = new Notes();
		// notes.setTitle("First Note");
		// notes.setContent("Content of the first note");
		// notes.setUser(user1);
		// list.add(notes);

		// user1.setNotes(list);

		// User savedUser = userDao.save(user1);
		// System.out.println(savedUser);

	}

}
