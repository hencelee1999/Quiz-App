package com.ust.quizApp.QuizAppbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.ust.quizApp.QuizAppbackend.entities.questions;






@RestController
@CrossOrigin(origins="http://localhost:4200/")
@RequestMapping("/questions")
public class QuestionController {
	
	@Autowired
	QuestionRepository questionRepository;
	
	@GetMapping("/")
	public List<questions> fetchAllQuizes(){
		return questionRepository.findAll();
	}
	
	@PostMapping("/")
	public void addQuiz(@RequestBody questions Questions){
		questionRepository.save(Questions);
	}

}