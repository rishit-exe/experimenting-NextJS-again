//projects page
import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <div>
        <h1 className="text-center pt-12 text-3xl">
          <span className="inline-flex items-center rounded-xl bg-black/40 px-10 py-3 text-white shadow-sm">
            <span className="w-2 h-8 bg-yellow-600 rounded-full mr-4" aria-hidden />
            <span>Projects</span>
          </span>
        </h1>
        <div className="flex justify-center py-10">
          <div className="flex gap-4">
            <Link href="/" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                Go Back to Home
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
