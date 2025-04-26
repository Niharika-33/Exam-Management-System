package com.exam.exam_backend.controller;

import java.util.List;

import com.exam.exam_backend.entity.RevealRequest;
import com.exam.exam_backend.service.RevealRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reval")
public class RevealRequestController {

    @Autowired
    private RevealRequestService revealRequestService;

    @PostMapping("/submit")
    public RevealRequest submitRequest(@RequestBody RevealRequest request) {
        return revealRequestService.storeRequestInDb(request);
    }

    @GetMapping("/all")
    public List<RevealRequest> getAllRequests() {
        return revealRequestService.fetchAllRequests();
    }

    @PutMapping("/status/{id}")
    public RevealRequest updateStatus(@PathVariable Long id, @RequestParam String status) {
        return revealRequestService.updateStatusInDb(id, status);
    }
}
