package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examID;
    private String examType; // "Mid", "CLA", "End Sem"
    private String subjectcode;
    private String syllabusDetails;
    private Integer totalMarks;
    private String testDate; // Only for "CLA" (Class Test)

    // Constructors
    public Exam() {}

    public Exam(String examType, String subject, String syllabusDetails, Integer totalMarks, String testDate) {
        this.examType = examType;
        this.subjectcode = subject;
        this.syllabusDetails = syllabusDetails;
        this.totalMarks = totalMarks;
        this.testDate = testDate;
    }

    // Getters and Setters
    public Long getExamID() {
        return examID;
    }

    public void setExamID(Long examID) {
        this.examID = examID;
    }

    public String getExamType() {
        return examType;
    }

    public void setExamType(String examType) {
        this.examType = examType;
    }

    public String getSubject() {
        return subjectcode;
    }

    public void setSubject(String subjectcode) {
        this.subjectcode= subjectcode;
    }

    public String getSyllabusDetails() {
        return syllabusDetails;
    }

    public void setSyllabusDetails(String syllabusDetails) {
        this.syllabusDetails = syllabusDetails;
    }

    public Integer getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(Integer totalMarks) {
        this.totalMarks = totalMarks;
    }

    public String getTestDate() {
        return testDate;
    }

    public void setTestDate(String testDate) {
        this.testDate = testDate;
    }
}