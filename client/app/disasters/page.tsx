"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Waves, Mountain, Zap, Wind, Moon, Sun } from "lucide-react"
import { disasters } from "@/lib/mock-data"
import { useTheme } from "next-themes"

export default function DisasterSelectionPage() {
  const [user, setUser] = useState<{ name: string; age: number } | null>(null)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const userData = localStorage.getItem("currentUser")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/")
    }
  }, [router])

  const getDisasterIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "flood":
        return <Waves className="w-8 h-8" />
      case "earthquake":
        return <Mountain className="w-8 h-8" />
      case "hurricane":
        return <Wind className="w-8 h-8" />
      case "wildfire":
        return <Zap className="w-8 h-8" />
      default:
        return <Mountain className="w-8 h-8" />
    }
  }

  const handleDisasterSelect = (disasterId: number) => {
    router.push(`/game/${disasterId}`)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Button>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push("/ranking")}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700"
            >
              Ver ranque
            </Button>
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

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Bem vindo, {user.name}!</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Escolha um cenário de desastre para aprender sobre medidas de prevenção e segurança
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disasters.map((disaster) => (
            <Card
              key={disaster.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 group"
              onClick={() => handleDisasterSelect(disaster.id)}
            >
              <div className="h-1 bg-black dark:bg-white" />
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {getDisasterIcon(disaster.type)}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{disaster.type}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{disaster.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {disaster.questions.length} Perguntas disponíveis
                    </p>
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-md hover:shadow-lg transition-all duration-200">
                    Começar Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
