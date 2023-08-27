import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center xl:flex-row flex-col">
        <Link href="/" className="flex items-center">
          <Image
            src="/rick-and-morty-logo.png"
            alt="Rick and Morty Logo"
            width={140}
            height={50}
          />
          <span className="text-white text-xl font-semibold ml-2">
            Rick and Morty
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-200"
              >
                Personajes
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-200"
                href="/episodios"
              >
                Episodios
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-200"
                href="/location"
              >
                Localización
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
