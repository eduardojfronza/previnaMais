"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function HomePage() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleStart = () => {
    if (name.trim() && age.trim()) {
      localStorage.setItem("currentUser", JSON.stringify({ name: name.trim(), age: Number.parseInt(age) }))
      router.push("/disasters")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 shadow-sm"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <Card className="shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white dark:text-black" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Disaster Prevention Game</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
              Learn how to stay safe during natural disasters through interactive quizzes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-4 flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold">Educational Purpose</p>
                <p>This game teaches essential disaster preparedness skills</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-gray-700 dark:text-gray-300 font-medium">
                  Your Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="1"
                  max="120"
                  className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-white focus:ring-black/20 dark:focus:ring-white/20"
                />
              </div>
            </div>

            <Button
              onClick={handleStart}
              disabled={!name.trim() || !age.trim()}
              className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Learning
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
