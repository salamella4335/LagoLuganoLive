import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden shadow-2xl">
        <div className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center text-center p-6 sm:p-12 bg-cover bg-center bg-[url('/night.jpeg')] dark:bg-[url('/morning.jpeg')]">
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="relative z-10 max-w-5xl space-y-10">
            <h1 className="hero-title !text-white text-6xl sm:text-7xl lg:text-9xl font-black leading-[1.1] tracking-tight drop-shadow-2xl">
              Experience Lugano <br /><span className="text-primary inline-block mt-2">Like Never Before</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl sm:text-2xl lg:text-3xl !text-white font-medium leading-relaxed drop-shadow-md">
              Discover the magic of the Swiss-Italian lake with unique trails, secret spots, and curated local guides.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/map" className="w-full sm:w-auto !min-w-[300px] flex !h-20 items-center justify-center !rounded-full bg-primary !px-12 !text-white !font-bold !text-2xl hover:scale-105 active:scale-95 shadow-xl shadow-primary/40 transition-all">
                Explore the map
              </Link>
              <Link to="/culture" className="w-full sm:w-auto !min-w-[300px] flex !h-20 items-center justify-center !rounded-full !bg-gray-500/50 backdrop-blur-xl !border border-gray-400/30 !px-12 !text-white !font-bold !text-2xl hover:!bg-gray-500/70 active:scale-95 transition-all">
                Discover the culture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
