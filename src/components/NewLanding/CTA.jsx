import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="bg-white dark:bg-slate-950 mx-auto max-w-7xl px-6 py-16 lg:px-20">
      <div className="rounded-xl bg-primary px-8 py-16 text-center text-white lg:px-16 lg:py-24">
        <h2 className="text-3xl font-bold md:text-5xl">Ready to Explore Lugano?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg !text-white/80">
          This web portal is already 90% complete and fully functional. Just need final touches and it will be ready to launch as soon as possible.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <Link to="/map" className="w-full sm:w-auto !min-w-[300px] flex !h-20 items-center justify-center !rounded-full bg-white !px-12 !text-primary !font-bold !text-2xl hover:scale-105 active:scale-95 shadow-xl transition-all">
            Explore the map
          </Link>
          <Link to="/culture" className="w-full sm:w-auto !min-w-[300px] flex !h-20 items-center justify-center !rounded-full !bg-gray-500/50 backdrop-blur-xl !border border-gray-400/30 !px-12 !text-white !font-bold !text-2xl hover:!bg-gray-500/70 active:scale-95 transition-all">
            Discover the culture
          </Link>
        </div>
      </div>
    </section>
  );
}
