import React from 'react';

export default function Stats() {
  const stats = [
    { value: '50+', label: 'KM of Trails' },
    { value: '14', label: 'Charging Stations' },
    { value: '3+', label: 'Points of Interest' },
    { value: 'Real-Time', label: 'Transit Tracking' },
  ];

  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="!text-5xl !font-black !text-white tracking-tight">{stat.value}</p>
              <p className="mt-2 !text-xs !font-semibold !text-white/70 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
