"use client";

import { ThemeToggle } from "./theme-toggle";
import { useRouter } from "nextjs-toploader/app";

const Header = () => {
  const links = [
    {
      id: "github",
      name: "Contribute",
      href: "https://github.com/Sushank-ghimire/academic-frontpage-generator/",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sushank-ghimire",
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/ghimiresushank",
    },
  ];

  const router = useRouter();

  return (
    <header className="w-full flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      {/* Left: App name */}
      <div className="hidden md:flex items-center space-x-4">
        <h1
          onClick={() => {
            router.push("/");
          }}
          className="text-lg select-none font-bold cursor-pointer"
        >
          Acemedic Frontpage Generator
        </h1>
        {/* Navigation links */}
        <nav className="flex space-x-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Right: Theme toggle */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
