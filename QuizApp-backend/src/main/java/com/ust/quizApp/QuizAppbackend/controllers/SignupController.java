package com.ust.quizApp.QuizAppbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.quizApp.QuizAppbackend.entities.Signup;







@RestController
@CrossOrigin
@RequestMapping("/signup")
public class SignupController {
	
	@Autowired
	SignupRepository signupRepository;
	
	@GetMapping("/")
	public List<Signup> fetchAllSignups(){
		return signupRepository.findAll();
	}
	
	@PostMapping("/")
	public void addQuiz(@RequestBody Signup signup){
		signupRepository.save(signup);
	}

}