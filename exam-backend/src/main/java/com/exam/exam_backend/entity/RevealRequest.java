package com.exam.exam_backend.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class RevealRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestID;

    private String studentId;
    private String revalDescription;
    private String status = "PENDING"; // Default status

    @Column(nullable = false, updatable = false)
    private LocalDate requestDate;

    public RevealRequest() {}

    public RevealRequest(Long requestID, String studentId, String revalDescription, String status) {
        this.requestID = requestID;
        this.studentId = studentId;
        this.revalDescription = revalDescription;
        this.status = status;
    }

    @PrePersist
    protected void onCreate() {
        this.requestDate = LocalDate.now();
    }

    public Long getRequestID() {
        return requestID;
    }

    public void setRequestID(Long requestID) {
        this.requestID = requestID;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getRevalDescription() {
        return revalDescription;
    }

    public void setRevalDescription(String revalDescription) {
        this.revalDescription = revalDescription;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
    }
}
