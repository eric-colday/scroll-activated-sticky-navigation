"use client";
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Vérifiez la direction du défilement
            if (currentScrollY > lastScrollY) {
                setVisible(false); // Scroll vers le bas
            } else {
                setVisible(true); // Scroll vers le haut
            }

            setLastScrollY(currentScrollY);
            setIsSticky(currentScrollY > 50); // Gardez la logique d'activation sticky
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : '-translate-y-full opacity-0'
                } ${isSticky ? 'bg-slate-500 shadow-lg' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto p-4 flex justify-between ">
                <h1 className="text-2xl font-bold">My Website</h1>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-500">About</a></li>
                    <li><a href="#services" className="hover:text-blue-500">Services</a></li>
                    <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};
