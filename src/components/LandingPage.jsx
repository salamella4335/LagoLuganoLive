import React from 'react';
import NewHeader from './NewLanding/NewHeader';
import Hero from './NewLanding/Hero';
import Explore from './NewLanding/Explore';
import Stats from './NewLanding/Stats';
import Features from './NewLanding/Features';
import CTA from './NewLanding/CTA';
import Footer from './NewLanding/Footer';

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
            <NewHeader />
            <main className="flex-1">
                <Hero />
                <Explore />
                <Stats />
                <Features />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;