import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Templates } from "./components/Templates";

export const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Templates />
            <Contact />
            <Footer />
        </>
    )
}