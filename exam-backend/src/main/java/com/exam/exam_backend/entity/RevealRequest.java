package com.exam.exam_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class RevealRequest {

    @Id
    private String requestID;
    private String status;

    public RevealRequest() {}

    public RevealRequest(String requestID, String status) {
        this.requestID = requestID;
        this.status = status;
    }

    // Getter for requestID
    public String getRequestID() {
        return requestID;
    }

    // Setter for requestID
    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }

    // Getter for status
    public String getStatus() {
        return status;
    }

    // Setter for status
    public void setStatus(String status) {
        this.status = status;
    }
}
