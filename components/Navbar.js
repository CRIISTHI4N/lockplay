"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed z-20 top-5 w-[81%] left-[50%] translate-x-[-50%] bg-gradient-to-l from-red-500 to-[#c94139] rounded-xl px-5 py-2 flex items-center justify-between gap-5 text-gray-100 transition-transform duration-500 shadow-lg border border-red-400 shadow-black/10 ${isVisible ? "translate-y-0" : "-translate-y-[200%]"}`}
        >
            <div className="flex items-center gap-5">
                <Link href="/">
                    <Image
                        src="/images/logo.webp"
                        alt="logo"
                        width={45}
                        height={45}
                        className="rounded-full"
                    />
                </Link>

                <ul className="flex items-center">
                    <li className="hover:bg-[#2c2c2c] rounded-md px-3 py-1 transition-all cursor-pointer duration-300 font-semibold">Inicio</li>
                    <li className="hover:bg-[#2c2c2c] rounded-md px-3 py-1 transition-all cursor-pointer duration-300 font-semibold">Nuestro Servicio</li>
                    <li className="hover:bg-[#2c2c2c] rounded-md px-3 py-1 transition-all cursor-pointer duration-300 font-semibold">Sobre nosotros</li>
                    <li className="hover:bg-[#2c2c2c] rounded-md px-3 py-1 transition-all cursor-pointer duration-300 font-semibold">Contacto</li>
                </ul>
            </div>

            <button
                type="button"
                className="flex items-center gap-1 bg-[#2c2c2c] rounded-md px-3 py-1 hover:bg-[#3c3c3c] transition-colors duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                Iniciar Sesión
            </button>
        </nav>
    );
} 