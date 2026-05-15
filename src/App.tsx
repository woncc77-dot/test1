/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

