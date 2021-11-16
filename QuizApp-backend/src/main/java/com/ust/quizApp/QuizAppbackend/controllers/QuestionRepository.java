package com.ust.quizApp.QuizAppbackend.controllers;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ust.quizApp.QuizAppbackend.entities.questions;


public interface QuestionRepository extends JpaRepository<questions, Integer>{

}
