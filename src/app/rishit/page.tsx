import Link from 'next/link'
import React from 'react'
import GoToHome from '../components/GoToHome'

export default function Rishit() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div>
          <h1 className="text-center pt-12 text-3xl">
            <span className="inline-flex items-center rounded-xl bg-black/40 px-10 py-3 text-white shadow-sm">
              <span className="w-2 h-8 bg-pink-600 rounded-full mr-4" aria-hidden />
              <span>About Me</span>
            </span>
          </h1>
          <div className="mt-10 max-w-3xl mx-auto flex items-center space-x-6">
            <div className="flex-1 text-white text-lg space-y-6">
              <p>
                Hello! I'm Rishit Srivastava, a passionate software developer with a keen interest in building innovative and efficient applications. I specialize in full-stack development and have experience working with various technologies including JavaScript, React, Node.js, and Python.
              </p>
              <p>
                I love solving complex problems and continuously learning new skills to enhance my development capabilities. In my free time, I enjoy contributing to open-source projects and exploring the latest trends in technology.
              </p>
              <p>
                Feel free to explore my portfolio to learn more about my projects, experience, and how to get in touch with me!
              </p>
            </div>
            <div className="w-48 h-48 bg-gray-700 rounded-lg">
              <img
                src="/rishit.jpg"
                alt="Rishit Srivastava"
                className="w-full h-full object-cover rounded-lg transform scale-105"
              />
            </div>
          </div>
          <GoToHome />
      </div>
    </main>
  )
}
