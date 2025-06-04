"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy, Medal, Crown, Moon, Sun, Star } from "lucide-react"
import { mockUsers } from "@/lib/mock-data"
import { useTheme } from "next-themes"

interface User {
  name: string
  age: number
  totalScore: number
}

export default function RankingPage() {
  const [allUsers, setAllUsers] = useState<User[]>([])
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const gameUsers = JSON.parse(localStorage.getItem("gameUsers") || "[]")
    const combined = [...mockUsers, ...gameUsers]

    const uniqueUsers = combined.reduce((acc: User[], current) => {
      const existingUser = acc.find((user) => user.name === current.name)
      if (!existingUser) {
        acc.push(current)
      } else if (current.totalScore > existingUser.totalScore) {
        const index = acc.indexOf(existingUser)
        acc[index] = current
      }
      return acc
    }, [])

    uniqueUsers.sort((a, b) => b.totalScore - a.totalScore)
    setAllUsers(uniqueUsers)
  }, [])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-7 h-7 text-yellow-500 dark:text-yellow-400" />
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400 dark:text-gray-300" />
      case 3:
        return <Medal className="w-6 h-6 text-orange-500 dark:text-orange-400" />
      default:
        return <Star className="w-5 h-5 text-blue-500 dark:text-blue-400" />
    }
  }

  const getRankColors = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          border: "border-l-yellow-500 dark:border-l-yellow-400",
          bg: "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
          iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-500 dark:from-yellow-300 dark:to-yellow-400",
          text: "text-yellow-700 dark:text-yellow-300",
          score: "text-yellow-600 dark:text-yellow-400",
          badge: "🏆 Champion",
        }
      case 2:
        return {
          border: "border-l-gray-400 dark:border-l-gray-300",
          bg: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50",
          iconBg: "bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-200 dark:to-gray-300",
          text: "text-gray-700 dark:text-gray-300",
          score: "text-gray-600 dark:text-gray-400",
          badge: "🥈 Runner-up",
        }
      case 3:
        return {
          border: "border-l-orange-500 dark:border-l-orange-400",
          bg: "bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
          iconBg: "bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-300 dark:to-orange-400",
          text: "text-orange-700 dark:text-orange-300",
          score: "text-orange-600 dark:text-orange-400",
          badge: "🥉 Third Place",
        }
      default:
        return {
          border: "border-l-blue-500 dark:border-l-blue-400",
          bg: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
          iconBg: "bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-300 dark:to-blue-400",
          text: "text-blue-700 dark:text-blue-300",
          score: "text-blue-600 dark:text-blue-400",
          badge: "⭐ Participant",
        }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push("/disasters")}
            className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
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

        <Card className="shadow-2xl border border-gray-200 dark:border-gray-700 mb-8 bg-white dark:bg-gray-800">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">Lider</CardTitle>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Principais especialistas em prevenção de desastres</p>
          </CardHeader>
        </Card>

        <div className="space-y-4">
          {allUsers.length === 0 ? (
            <Card className="shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardContent className="text-center py-12">
                <div className="mb-6">
                  <Trophy className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">Sem pontos ainda!</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Seja o primeiro a completar um quiz e conquiste o primeiro lugar.
                  </p>
                </div>
                <Button
                  onClick={() => router.push("/disasters")}
                  className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Jogue seu primeiro jogo
                </Button>
              </CardContent>
            </Card>
          ) : (
            allUsers.map((user, index) => {
              const rank = index + 1
              const colors = getRankColors(rank)
              return (
                <Card
                  key={`${user.name}-${index}`}
                  className={`shadow-lg border border-gray-200 dark:border-gray-700 border-l-4 ${colors.border} ${colors.bg} transition-all duration-200 hover:shadow-xl hover:scale-[1.02] bg-white dark:bg-gray-800`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`flex items-center justify-center w-12 h-12 ${colors.iconBg} rounded-full shadow-md`}
                        >
                          {getRankIcon(rank)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{user.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Idade: {user.age}</p>
                          <p className={`text-xs font-medium ${colors.text}`}>{colors.badge}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-3xl font-bold ${colors.score}`}>{user.totalScore}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">points</p>
                        {rank <= 3 && (
                          <div className="flex justify-end mt-1">
                            {Array.from({ length: rank === 1 ? 3 : rank === 2 ? 2 : 1 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${rank === 1
                                  ? "text-yellow-400 fill-yellow-400"
                                  : rank === 2
                                    ? "text-gray-400 fill-gray-400"
                                    : "text-orange-400 fill-orange-400"
                                  }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>

        <div className="mt-10 text-center">
          <Button
            onClick={() => router.push("/disasters")}
            className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black shadow-lg hover:shadow-xl transition-all duration-200 py-3 text-lg font-semibold"
          >
            Jogar mais
          </Button>
        </div>
      </div>
    </div>
  )
}
