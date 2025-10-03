import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TechnologiesCarrusel } from "./components/TechnologiesCarrusel";
import { Testimonials } from "./components/Testimonials";
import { Templates } from "./components/Templates";

export const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Templates />
            <FAQ />
            <About />
            <TechnologiesCarrusel />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}