import React from "react";
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Home Section</h2>
      </section>
      <section id="about" className="h-screen  flex items-center justify-center">
        <h2 className="text-4xl">About Section</h2>
      </section>
      <section id="services" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Services Section</h2>
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <h2 className="text-4xl">Contact Section</h2>
      </section>
    </div>
  );
}
