import React from 'react';

export default function Explore() {
  const options = [
    { icon: 'footprint', title: 'Walk', desc: 'Scenic alpine trails and city promenades.' },
    { icon: 'directions_bike', title: 'Bike', desc: 'Curated cycling paths for all levels.' },
    { icon: 'explore', title: 'Explore', desc: 'Uncover hidden gems and local culture.' },
    { icon: 'directions_bus', title: 'Commute', desc: 'Live transit updates for the city network.' },
    { icon: 'directions_boat', title: 'Boats', desc: 'Ferry schedules across Lake Lugano.' },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 w-full px-6 py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">Explore the Region</h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">Tailored experiences for every type of traveler.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 dark:bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-[22px]">{opt.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="!text-xl !font-bold text-slate-900 dark:text-white">{opt.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
