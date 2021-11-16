package com.ust.quizApp.QuizAppbackend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.ust.quizApp.QuizAppbackend.entities.questions;

@SpringBootTest
class QuizAppBackendApplicationTests {

	@Test
	public void TestcreateQuestion() {
		questions Question = new questions();
		Question.setId(1);
		Question.setQuestionText("What are the featuresof oop?");
//		Question.setOptions(  [encapsulation, inheritance, abstraction, all] );
		Question.setCorrect(3);
		QuestionRepository.save(Question);
		
		
	}

}
