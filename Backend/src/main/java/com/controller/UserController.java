package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dto.UserDTO;
import com.entity.User;
import com.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService service;

  
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User u) {

        String result = service.register(u);

        if (result.toLowerCase().contains("successful")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(result);
        }
    }

    // ==========================
    // LOGIN API
    // ==========================
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO dto) {

        User existinguser = service.login(dto);

        if (existinguser != null) {
            return ResponseEntity.ok(existinguser);
        } else {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password");
        }
    }
}