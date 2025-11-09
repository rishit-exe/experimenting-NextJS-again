"use client";
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
        <span className="box-decoration-slice rounded-xl px-10 py-3 bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white">
          Welcome To My Portfolio
        </span>
      </h1>
      <br />
      <br />
      {/* <Link href="/rishit" className="bg-sky-500 hover:bg-sky-700">About Me using Link</Link> */}
      <div className="flex justify-center">
        <div className="flex gap-4">
          <Link href="/rishit" className="inline-block">
            <button
              className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded-2xl text-white text-lg"
            >
              About Me
            </button>
          </Link>
          <Link href="/experience" className="inline-block">
          <button
            className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded-2xl text-white text-lg inline-block"
          >
           Experience
          </button>
          </Link>
          <Link href="/projects" className="inline-block">
          <button
            className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded-2xl text-white text-lg inline-block"
          >
           Projects
          </button>
          </Link>
          <Link href="/certificates" className="inline-block">
          <button
            className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded-2xl text-white text-lg inline-block"
          >
           Certificates
          </button>
          </Link>
          <Link href="/contact-me" className="inline-block">
          <button
            className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 px-6 py-3 rounded-2xl text-white text-lg inline-block"
          >
           Contact Me
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
