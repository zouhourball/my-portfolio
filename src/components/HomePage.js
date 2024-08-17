// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contacts';
import Footer from './Footer';
import Experiences from './Experiences';

const App = () => {
    return (
        <div className="App">
           <Header />
        <section className="hero">
            <div className="hero-content">
                <h1>Zouhour Balloum</h1>
            </div>
        
        </section>
        <main>
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Contact />
        </main>
        <Footer />
           
        </div>
    );
};

export default App;

