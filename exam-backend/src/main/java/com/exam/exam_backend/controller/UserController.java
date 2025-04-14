package com.exam.exam_backend.controller;

import com.exam.exam_backend.entity.User;
import com.exam.exam_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Login endpoint
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if (userService.login(user)) {
            return "Login successful!";
        } else {
            return "Invalid username or password!";
        }
    }

    // Logout endpoint
    @PostMapping("/logout")
    public String logout(@RequestBody User user) {
        if (userService.logout(user)) {
            return "Logout successful!";
        } else {
            return "Logout failed!";
        }
    }
}
