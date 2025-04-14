package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Issue {

    @Id
    private String issueID;
    private String description;

    public Issue() {}

    public Issue(String issueID, String description) {
        this.issueID = issueID;
        this.description = description;
    }

    // Getters and Setters
}
