import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h1 className="text-center pt-8 sm:pt-12 text-3xl">
          <span className="inline-flex items-center rounded-xl bg-black/40 px-4 sm:px-10 py-3 text-white shadow-sm">
            <span className="w-2 h-8 bg-violet-600 rounded-full mr-4" aria-hidden />
            <span>Welcome To My Portfolio</span>
          </span>
        </h1>

        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/rishit" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                About Me
              </button>
            </Link>

            <Link href="/experience" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                Experience
              </button>
            </Link>

            <Link href="/projects" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                Projects
              </button>
            </Link>

            <Link href="/certificates" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                Certificates
              </button>
            </Link>

            <Link href="/contact-me" className="inline-block">
              <button
                className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-white text-lg border border-white/5"
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        
        {/* Task Logger (responsive) */}
        <section className="mt-10 px-4 sm:px-0">
          <h2 className="text-3xl font-bold text-center sm:text-left">Task Logger:</h2>

          <div className="mt-4">
            <ol className="list-decimal ml-6 space-y-2">
              <li className="text-xl">
                Task 1: Reinforce Next.js App Router and Tailwind CSS integration skills.

                <ul className="list-disc ml-8 px-4 py-2 text-lg space-y-2">
                  <li className="leading-relaxed">
                    Description: Two routes a) Root Route and b) Personal Route ( /rishit ).
                    <span className="block ml-0 sm:ml-6">
                      In personal route include your details like some favourite movies or hobbies and add a go to home button too.
                    </span>
                  </li>
                  <li className="pt-2">
                    Status:
                    <span className="font-semibold ml-2">In Progress</span>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
