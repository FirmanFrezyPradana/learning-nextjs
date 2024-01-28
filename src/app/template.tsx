"use client"
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    const [count , setCout] = useState(0)
    return (
        <div>
        <h1>Hello ini tamplate</h1>
        {children}
        <div>{count}</div>
        <button onClick={()=>{setCout(count+1)}}>clik here</button>
        </div>
        )
  }