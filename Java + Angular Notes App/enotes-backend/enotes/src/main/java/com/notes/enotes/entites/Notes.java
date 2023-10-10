package com.notes.enotes.entites;

import java.util.Date;

import javax.persistence.*;

@Entity
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title;

    private String content;

    private int userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime; // Will help to find the recent 10 notes

    public Notes() {

    }

    public Notes(int id, String title, String content, int userId, Date createdTime) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.createdTime = createdTime;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    @Override
    public String toString() {
        return "Notes [id=" + id + ", title=" + title + ", content=" + content + "]";
    }
}
