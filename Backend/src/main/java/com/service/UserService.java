package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dto.UserDTO;
import com.entity.User;
import com.repository.UserRepository;
import com.repository.EmployeeRepository;

@Service
public class UserService {

    @Autowired
    UserRepository uresp;

    @Autowired
    EmployeeRepository eresp;

    // ==========================
    // REGISTER
    // ==========================
    public String register(User u) {

        // 1. Check employee exists in Employee table
        boolean empExists = eresp.existsById(u.getEmpid());

        if (!empExists) {
            return "Invalid Employee ID. You are not allowed to register.";
        }

        // 2. Check if username already exists
        User existinguser = uresp.findByUsername(u.getUsername());

        if (existinguser != null) {
            return "Username already exists. Please choose another.";
        }

        // 3. Check if already registered with same empid
        User empiduser = uresp.findByEmpid(u.getEmpid());

        if (empiduser != null) {
            return "You are already registered with this Employee ID. Please login.";
        }

        // 4. Save user
        uresp.save(u);
        return "Registration successful.";
    }

    // ==========================
    // LOGIN
    // ==========================
    public User login(UserDTO dto) {

        User existinguser = uresp.findByUsername(dto.getUsername());

        if (existinguser == null) {
            return null;
        }

        if (existinguser.getPassword().equals(dto.getPassword())) {
            return existinguser;
        }

        return null;
    }
}