package com.notes.enotes.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.notes.enotes.entites.Notes;

public interface NotesDao extends CrudRepository<Notes,Integer> {
    
    // custom finder method for Recent 10 notes
    List<Notes> findTop10ByUserIdOrderByCreatedTimeDesc(@Param("userId") int userId);
}
