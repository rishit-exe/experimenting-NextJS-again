import React from 'react'
import Link from 'next/link'

export default function GoToHome() {
  return (
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
  )
}
