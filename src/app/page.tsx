import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Home() {
  function goToRishit(){
    window.location.href = '/rishit';
  }
  return (
    <div>
      <h1 className="text-center pt-12 text-3xl">
        <span className="inline-flex items-center rounded-xl bg-black/40 px-10 py-3 text-white shadow-sm">
          <span className="w-2 h-8 bg-violet-600 rounded-full mr-4" aria-hidden />
          <span>Welcome To My Portfolio</span>
        </span>
      </h1>
      <br />
      <br />
      {/* <Link href="/rishit" className="bg-sky-500 hover:bg-sky-700">About Me using Link</Link> */}
      <div className="flex justify-center">
        <div className="flex gap-4">
          <Link href="/rishit" className="inline-block">
            <button
              className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg border border-white/5"
            >
              About Me
            </button>
          </Link>
          <Link href="/experience" className="inline-block">
          <button
            className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg inline-block border border-white/5"
          >
           Experience
          </button>
          </Link>
          <Link href="/projects" className="inline-block">
          <button
            className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg inline-block border border-white/5"
          >
           Projects
          </button>
          </Link>
          <Link href="/certificates" className="inline-block">
          <button
            className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg inline-block border border-white/5"
          >
           Certificates
          </button>
          </Link>
          <Link href="/contact-me" className="inline-block">
          <button
            className="bg-linear-to-r from-neutral-800/60 via-neutral-900/40 to-black/80 hover:from-neutral-700/60 hover:via-neutral-800/40 hover:to-black/70 focus:outline-2 focus:outline-offset-2 focus:outline-white/20 active:opacity-90 px-6 py-3 rounded-2xl text-white text-lg inline-block border border-white/5"
          >
           Contact Me
          </button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Task Logger:</h1>

        <div className="mt-4 text-left ml-100">
          <ol className="list-decimal">
          <li className="text-xl">
            Task 1: Reinforce Next.js App Router and Tailwind CSS integration skills.
          </li>
          <ul className="px-10 py-2 list-disc text-lg">
            <li className="leading-relaxed">
              Description: Two routes a) Root Route and b) Personal Route ( /rishit ).
              <span className="block ml-22">
                In personal route include your details like some favourite movies or hobbies and add a go to home button too.
              </span>
            </li>
            <li className="pt-2">
              Status:
              <span className="font-semibold ml-2">In Progress</span>
            </li>  
          </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}
