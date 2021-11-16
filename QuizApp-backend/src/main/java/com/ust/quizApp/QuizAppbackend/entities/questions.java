package com.ust.quizApp.QuizAppbackend.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class questions {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String[] options;
	
	String questionText;
	
	int correct;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String[] getOptions() {
		return options;
	}

	public void setOptions(String[] options) {
		this.options = options;
	}

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public int getCorrect() {
		return correct;
	}

	public void setCorrect(int correct) {
		this.correct = correct;
	}

	



	
	}