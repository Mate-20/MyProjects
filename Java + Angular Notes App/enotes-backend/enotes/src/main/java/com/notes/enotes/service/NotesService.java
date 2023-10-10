package com.notes.enotes.service;

import com.notes.enotes.entites.Notes;

public interface NotesService {
    
    public void addNote(Notes note);

    public Notes deleteNote(int id);

    
}
