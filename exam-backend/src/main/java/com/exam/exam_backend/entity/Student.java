package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name = "userID")
public class Student extends User {

    private int year;
    private String department;

    public Student() {}

    public Student(String userID, int password, String name, String email, int year, String department) {
        super(userID, password, name, email);
        this.year = year;
        this.department = department;
    }

    // Getters and Setters
    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
