package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "userID")
public class Faculty extends User {

    public Faculty() {}

    public Faculty(String userID, String password, String name, String email) {
        super(userID, password, name, email);
    }

    // Getters and Setters
    public String getUserID() {
        return super.getUserID();
    }

    public void setUserID(String userID) {
        super.setUserID(userID);
    }

    public String getPassword() {
        return super.getPassword();
    }

    public void setPassword(String password) {
        super.setPassword(password);
    }

    public String getName() {
        return super.getName();
    }

    public void setName(String name) {
        super.setName(name);
    }

    public String getEmail() {
        return super.getEmail();
    }

    public void setEmail(String email) {
        super.setEmail(email);
    }
}
