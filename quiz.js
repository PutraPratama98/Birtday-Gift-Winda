import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const questions = [
  {
    question: "Di mana pertama kali aku dan Winda bertemu?",
    options: ["Mall", "Kantor", "Pusat Kota Jakarta", "Cafe"],
    answer: "Pusat Kota Jakarta",
  },
  {
    question: "Apa kesamaan yang membuat aku tertarik dengan Winda?",
    options: ["Sama-sama suka drama Korea", "Sama-sama suka One Piece", "Sama-sama suka kopi", "Sama-sama suka musik jazz"],
    answer: "Sama-sama suka One Piece",
  },
  {
    question: "Siapa yang pertama kali mengenalkan aku dengan Winda?",
    options: ["Mas Faisal", "Mas Ari", "Bunda", "Sudendra"],
    answer: "Mas Ari",
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-5">
      <Card className="w-full max-w-md bg-white shadow-lg p-5 rounded-2xl text-center">
        {showResult ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-green-600">Kuis Selesai!</h2>
            <p className="text-lg mt-3">Skor kamu: {score} dari {questions.length}</p>
            <Button className="mt-5" onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }}>Main Lagi</Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  className="w-full"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </Card>
    </div>
  );
}
