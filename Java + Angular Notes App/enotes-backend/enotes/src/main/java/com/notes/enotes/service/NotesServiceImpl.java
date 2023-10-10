package com.notes.enotes.service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.notes.enotes.dao.NotesDao;
import com.notes.enotes.entites.Notes;

@Component
public class NotesServiceImpl implements NotesService {

    @Autowired
    private NotesDao notesDao;

    // Adding note function
    @Override
    public void addNote(Notes note) {
        note.setCreatedTime(new Date());
        notesDao.save(note);
    }

    // Deleting note function
    @Override
    public Notes deleteNote(int id) {
        Optional<Notes> optionalNote = notesDao.findById(id);
        if (optionalNote.isPresent()) {
            // If the note exists, delete it
            Notes noteToDelete = optionalNote.get();
            notesDao.deleteById(id);

            // Return the deleted note
            return noteToDelete;
        }
        return null;
    }

    // Finding the notes
    public List<Notes> findNotes(int userId) {
        List<Notes> list = notesDao.findTop10ByUserIdOrderByCreatedTimeDesc(userId);
        return list;
    }


    // Will delete excess notes after evert one hour
    @Scheduled(cron = "0 0 * * * ?") // Will run after every one hour
    public void deleteNotesAboveLimit() {
        int limit = 10; // Limit of 10 notes
        
        List<Notes> allNotes = (List<Notes>)notesDao.findAll();

        // Group notes by userId
        Map<Integer, List<Notes>> notesByUserId = allNotes.stream()
                .collect(Collectors.groupingBy(Notes::getUserId));

        // Iterate over each user's notes and delete the excess notes
        for (Map.Entry<Integer, List<Notes>> entry : notesByUserId.entrySet()) {
            List<Notes> userNotes = entry.getValue();
            if (userNotes.size() > limit) {
                // Sort notes by createdTime (if not already sorted)
                userNotes.sort(Comparator.comparing(Notes::getCreatedTime));

                // Delete the excess notes
                int notesToDelete = userNotes.size() - limit;
                List<Notes> notesToDeleteList = userNotes.subList(0, notesToDelete);
                for (Notes note : notesToDeleteList) {
                    notesDao.delete(note);
                }
            }
        }
    }
}
