//contact me page
import Link from 'next/link'
import React from 'react'
import GoToHome from '../components/GoToHome'

export default function ContactMe() {
  return (
    <div>
        <h1 className="text-center pt-12 text-3xl">
          <span className="inline-flex items-center rounded-xl bg-black/40 px-10 py-3 text-white shadow-sm">
            <span className="w-2 h-8 bg-purple-600 rounded-full mr-4" aria-hidden />
            <span>Contact Me</span>
          </span>
        </h1>
        <GoToHome />
    </div>
  )
}
