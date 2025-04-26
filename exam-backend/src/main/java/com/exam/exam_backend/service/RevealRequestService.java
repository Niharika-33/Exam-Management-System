package com.exam.exam_backend.service;

import java.util.List;

import com.exam.exam_backend.entity.RevealRequest;
import com.exam.exam_backend.repository.RevealRequestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RevealRequestService {

    @Autowired
    private RevealRequestRepository revealRequestRepository;

    public RevealRequest storeRequestInDb(RevealRequest request) {
        return revealRequestRepository.save(request);
    }

    public List<RevealRequest> fetchAllRequests() {
        return revealRequestRepository.findAll();
    }

    public RevealRequest updateStatusInDb(Long requestId, String status) {
        RevealRequest req = revealRequestRepository.findById(requestId).orElse(null);
        if (req != null) {
            req.setStatus(status);
            return revealRequestRepository.save(req);
        }
        return null;
    }
}