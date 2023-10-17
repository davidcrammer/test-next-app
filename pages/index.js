import { Inter } from "next/font/google"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  // Update the time every second
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <main className={`p-20 ${inter.className}`}>
      <h1 className="text-xl font-bold">Test Next App</h1>
      <p className="text-sm">Hey this is a quick next.js app I created</p>
      <div className="p-3 w-[300px] bg-slate-100 my-2 rounded-xl border border-slate-200">
        <p className="break-inside-avoid-column">{time}</p>
      </div>
      <p className="text-xs">This is the updated version of this app.</p>
    </main>
  )
}
