package com.exam.exam_backend.service;

import com.exam.exam_backend.entity.User;
import com.exam.exam_backend.entity.Student;
import com.exam.exam_backend.entity.Faculty;
import com.exam.exam_backend.entity.Admin;
import com.exam.exam_backend.repository.UserRepository;
import com.exam.exam_backend.repository.StudentRepository;
import com.exam.exam_backend.repository.FacultyRepository;
import com.exam.exam_backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FacultyRepository facultyRepository;

    @Autowired
    private AdminRepository adminRepository;

    // Login method that checks credentials for different user roles
    public boolean login(User user) {
        // Check in User table
        if (userRepository.existsById(user.getUserID())) {
            User existingUser = userRepository.findById(user.getUserID()).get();
            if (existingUser.getPassword()==(user.getPassword())) {
                return true; // Valid login for User
            }
        }

        // Check in Student table
        if (studentRepository.existsById(user.getUserID())) {
            Student student = studentRepository.findById(user.getUserID()).get();
            if (student.getPassword()==(user.getPassword())) {
                return true; // Valid login for Student
            }
        }

        // Check in Faculty table
        if (facultyRepository.existsById(user.getUserID())) {
            Faculty faculty = facultyRepository.findById(user.getUserID()).get();
            if (faculty.getPassword()==(user.getPassword())) {
                return true; // Valid login for Faculty
            }
        }

        // Check in Admin table
        if (adminRepository.existsById(user.getUserID())) {
            Admin admin = adminRepository.findById(user.getUserID()).get();
            if (admin.getPassword()==(user.getPassword())) {
                return true; // Valid login for Admin
            }
        }

        return false; // Invalid login if no match is found
    }

    // Logout method (dummy implementation as there's no session tracking)
    public boolean logout(User user) {
        return true; // Implement session invalidation logic here if required
    }
}
