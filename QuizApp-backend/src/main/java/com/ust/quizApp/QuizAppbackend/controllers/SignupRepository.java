package com.ust.quizApp.QuizAppbackend.controllers;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.quizApp.QuizAppbackend.entities.Signup;


public interface SignupRepository extends JpaRepository<Signup, Integer> {

}
