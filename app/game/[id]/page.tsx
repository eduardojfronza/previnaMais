"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, XCircle, Moon, Sun } from "lucide-react"
import { disasters } from "@/lib/mock-data"
import { useTheme } from "next-themes"

export default function GamePage() {
  const [user, setUser] = useState<{ name: string; age: number } | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const router = useRouter()
  const params = useParams()
  const { theme, setTheme } = useTheme()

  const disasterId = Number.parseInt(params.id as string)
  const disaster = disasters.find((d) => d.id === disasterId)

  useEffect(() => {
    const userData = localStorage.getItem("currentUser")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/")
    }
  }, [router])

  if (!disaster || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Cenário de desastre não encontrado</p>
          <Button onClick={() => router.push("/disasters")}>Voltar para a seleção</Button>
        </div>
      </div>
    )
  }

  const currentQuestion = disaster.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / disaster.questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 10)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < disaster.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setGameCompleted(true)
      const existingUsers = JSON.parse(localStorage.getItem("gameUsers") || "[]")
      const updatedUsers = [
        ...existingUsers,
        { ...user, totalScore: score + (selectedAnswer === currentQuestion.correctAnswerIndex ? 10 : 0) },
      ]
      localStorage.setItem("gameUsers", JSON.stringify(updatedUsers))
    }
  }

  const handlePlayAgain = () => {
    router.push("/disasters")
  }

  if (gameCompleted) {
    const finalScore = score + (selectedAnswer === currentQuestion.correctAnswerIndex ? 10 : 0)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black flex items-center justify-center p-4 transition-colors duration-300">
        <Card className="w-full max-w-md shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Quiz Completo!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
              <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{finalScore}</p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Total de pontos</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Ótimo trabalho aprendendo sobre prevenção de {disaster.type}! Você respondeu {Math.floor(finalScore / 10)} de {" "}
                {disaster.questions.length} perguntas corretamente.
              </p>
            </div>
            <div className="space-y-3">
              <Button
                onClick={handlePlayAgain}
                className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Tentar outro disastre
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/ranking")}
                className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                Ver ranque
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => router.push("/disasters")}
            className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Button>
          <div className="flex items-center space-x-4">
            <div className="text-right bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">Pontos</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{score}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{disaster.type} Questionário de segurança</h1>
            <span className="text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1">
              {currentQuestionIndex + 1} de {disaster.questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-gray-200 dark:bg-gray-700" />
        </div>

        <Card className="shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white leading-relaxed">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left p-4 border-2 rounded-xl transition-all duration-200 font-medium "

              if (showFeedback) {
                if (index === currentQuestion.correctAnswerIndex) {
                  buttonClass +=
                    "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 shadow-lg"
                } else if (index === selectedAnswer && index !== currentQuestion.correctAnswerIndex) {
                  buttonClass +=
                    "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 shadow-lg"
                } else {
                  buttonClass +=
                    "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-500"
                }
              } else {
                buttonClass +=
                  "border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:shadow-md text-gray-700 dark:text-gray-200"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showFeedback}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback && index === currentQuestion.correctAnswerIndex && (
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    )}
                    {showFeedback && index === selectedAnswer && index !== currentQuestion.correctAnswerIndex && (
                      <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </button>
              )
            })}

            {showFeedback && (
              <div className="mt-6">
                <div
                  className={`p-5 rounded-xl border-2 ${selectedAnswer === currentQuestion.correctAnswerIndex
                    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                    }`}
                >
                  <p
                    className={`font-bold text-lg ${selectedAnswer === currentQuestion.correctAnswerIndex
                      ? "text-green-800 dark:text-green-200"
                      : "text-red-800 dark:text-red-200"
                      }`}
                  >
                    {selectedAnswer === currentQuestion.correctAnswerIndex ? "Correto! 🎉" : "Incorreto 😔"}
                  </p>
                  <p
                    className={`text-sm mt-2 ${selectedAnswer === currentQuestion.correctAnswerIndex
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-700 dark:text-red-300"
                      }`}
                  >
                    {currentQuestion.explanation}
                  </p>
                </div>
                <Button
                  onClick={handleNextQuestion}
                  className="w-full mt-4 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {currentQuestionIndex < disaster.questions.length - 1 ? "Proxima" : "Finalizar Quiz"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
