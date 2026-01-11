import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Quiz.css";

const Quiz = () => {
  const quizData = [
    {
      id: 1,
      question: "What is the name of the alien device that Ben uses?",
      options: ["Omnitrix", "Ultramatrix", "Biomnitrix", "Autosmith"],
      correct: 0,
    },
    {
      id: 2,
      question: "Who is Ben Tennyson's grandfather?",
      options: ["Maxwell Tennyson", "Carl Tennyson", "Frank Tennyson", "Bob Tennyson"],
      correct: 0,
    },
    {
      id: 3,
      question: "What is Gwen's primary superpower in the series?",
      options: ["Telekinesis", "Magic", "Speed", "Strength"],
      correct: 1,
    },
    {
      id: 4,
      question: "What does Ben become first time he activates the Omnitrix?",
      options: ["Heatblast", "Four Arms", "Ghostfreak", "XLR8"],
      correct: 0,
    },
    {
      id: 5,
      question: "How many original aliens can the classic Omnitrix transform Ben into?",
      options: ["10", "13", "16", "20"],
      correct: 0,
    },
    {
      id: 6,
      question: "Who is Ben's arch-nemesis in the original series?",
      options: ["Vilgax", "Kevin 11", "Aggregor", "Malware"],
      correct: 0,
    },
    {
      id: 7,
      question: "What alien is Ben when he has super strength and four arms?",
      options: ["Heatblast", "Four Arms", "Grey Matter", "Upgrade"],
      correct: 1,
    },
    {
      id: 8,
      question: "What is Kevin Levin's full name in the show?",
      options: ["Kevin Elevyn", "Kevin Levin", "Kevin Evan", "Kevin Lynn"],
      correct: 1,
    },
    {
      id: 9,
      question: "Which alien can Ben use to phase through objects?",
      options: ["Ghostfreak", "XLR8", "Diamondhead", "Ripjaws"],
      correct: 0,
    },
    {
      id: 10,
      question: "What is the name of Ben's sentient alien DNA transformation?",
      options: ["Pesky Dust", "Upchuck", "Wildmutt", "Upgrade"],
      correct: 3,
    },
    {
      id: 11,
      question: "How old is Ben Tennyson at the start of the original series?",
      options: ["8 years old", "10 years old", "12 years old", "15 years old"],
      correct: 2,
    },
    {
      id: 12,
      question: "What is Wildmutt's primary ability?",
      options: ["Super Strength", "Enhanced Senses", "Speed", "Fire Control"],
      correct: 1,
    },
    {
      id: 13,
      question: "Who created the Omnitrix?",
      options: ["Azmuth", "Albedo", "Vilgax", "Aggregor"],
      correct: 0,
    },
    {
      id: 14,
      question: "What is the civilian form of the alien with telepathy and psychokinesis?",
      options: ["Four Arms", "XLR8", "Grey Matter", "Upgrade"],
      correct: 2,
    },
    {
      id: 15,
      question: "Which alien can Ben use to move at super speed?",
      options: ["XLR8", "Four Arms", "Heatblast", "Upgrade"],
      correct: 0,
    },
    {
      id: 16,
      question: "What is Diamondhead made of?",
      options: ["Crystal", "Diamond", "Minerals", "Crystalline Silicon"],
      correct: 2,
    },
    {
      id: 17,
      question: "How long does the Omnitrix timeout initially?",
      options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
      correct: 1,
    },
    {
      id: 18,
      question: "What is the name of Ben's cousin?",
      options: ["Gwen Tennyson", "Julie Yamamoto", "Charmcaster", "Rook"],
      correct: 0,
    },
    {
      id: 19,
      question: "Which alien is a small genius capable of building advanced technology?",
      options: ["Upgrade", "Grey Matter", "Feedback", "Bloxx"],
      correct: 1,
    },
    {
      id: 20,
      question: "What is the primary weakness of the Omnitrix?",
      options: ["Water", "Radiation", "Vilgax", "The timeout timer"],
      correct: 3,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answered, setAnswered] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setAnswered(index);

    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setAnswered(null);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswered(null);
    setSelectedAnswer(null);
  };

  return (
    <div className="quiz-container">
      <motion.div
        className="quiz-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>🧬 Ben 10 Ultimate Quiz</h1>
        <p>Test your knowledge of Ben 10 characters and story!</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {showScore ? (
          <motion.div
            key="score"
            className="score-section"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="score-card"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Quiz Completed! 🎉</h2>
              <div className="score-display">
                <motion.div
                  className="score-number"
                  initial={{ count: 0 }}
                  animate={{ count: score }}
                  transition={{ duration: 2, type: "spring" }}
                >
                  {score}/{quizData.length}
                </motion.div>
              </div>

              <motion.div
                className="score-message"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {score === quizData.length && (
                  <p className="perfect">You are a Ben 10 Master! 👽</p>
                )}
                {score >= 16 && score < quizData.length && (
                  <p className="excellent">Excellent Knowledge! You're Amazing! 🌟</p>
                )}
                {score >= 12 && score < 16 && (
                  <p className="good">Good Job! You know Ben 10 well! 💪</p>
                )}
                {score >= 8 && score < 12 && (
                  <p className="okay">Not bad! Keep learning! 📚</p>
                )}
                {score < 8 && (
                  <p className="poor">Time to watch Ben 10 again! 📺</p>
                )}
              </motion.div>

              <motion.button
                className="restart-btn"
                onClick={restartQuiz}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            className="quiz-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>

            <div className="question-number">
              Question {currentQuestion + 1}/{quizData.length}
            </div>

            <motion.h2
              className="question"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {quizData[currentQuestion].question}
            </motion.h2>

            <div className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-btn ${
                    selectedAnswer === index
                      ? index === quizData[currentQuestion].correct
                        ? "correct"
                        : "incorrect"
                      : ""
                  } ${answered !== null && index === quizData[currentQuestion].correct ? "show-correct" : ""}`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={answered !== null}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={answered === null ? { scale: 1.05, x: 10 } : {}}
                  whileTap={answered === null ? { scale: 0.95 } : {}}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                  {answered !== null && index === quizData[currentQuestion].correct && (
                    <motion.span
                      className="checkmark"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      ✓
                    </motion.span>
                  )}
                  {answered !== null &&
                    selectedAnswer === index &&
                    index !== quizData[currentQuestion].correct && (
                      <motion.span
                        className="cross"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        ✗
                      </motion.span>
                    )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
