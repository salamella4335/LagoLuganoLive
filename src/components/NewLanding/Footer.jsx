import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              Lago<span className="text-primary">Lugano</span>Live
            </span>
          </div>
          <div className="text-center md:text-right max-w-xl text-sm font-medium text-slate-500 dark:text-slate-400">
            Created as a functional prototype for the <span className="text-primary font-bold">Rotary CittàDeiLaghiFuturo</span> contest. This platform is 90% complete, fully interactive, and ready for deployment.
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LagoLuganoLive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
