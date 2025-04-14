package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RevealRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long requestID;

    private String studentId;
    private String revalDescription;
    private String status = "PENDING"; // Default

    public RevealRequest() {}

    public RevealRequest(Long requestID, String studentId, String revalDescription, String status) {
        this.requestID = requestID;
        this.studentId = studentId;
        this.revalDescription = revalDescription;
        this.status = status;
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
}
