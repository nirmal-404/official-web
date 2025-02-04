"use client"

import { useState, useEffect } from "react"

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a short delay or wait for hydration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5s or however long you want

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    // Show your custom loading screen
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[999999]">
        <h2 className="text-xl font-semibold mb-4">Loading...</h2>
        <img
          src="/assets/running-fox.gif"
          alt="Loading..."
          className="w-32 h-auto"
        />
      </div>
    )
  }

  // If not loading, render children (the actual app)
  return <>{children}</>
}
