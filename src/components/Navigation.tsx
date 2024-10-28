'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from "./LocaleSwitcher";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <a href={href} onClick={handleClick} className="px-2 py-1 rounded-md bg-transparent hover:no-underline">
      {label}
    </a>
  );
};

export default function WithAction() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const Links = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('why us'), href: '#why-us' },
    { label: t('contact'), href: '#contact' },
  ];

  const headerBgColor = isOpen
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.1)';
  const buttonBgColor = isOpen ? 'black' : 'white';
  const buttonTextColor = isOpen ? 'white' : 'black';

  return (
    <header
      style={{ backgroundColor: headerBgColor, backdropFilter: 'saturate(100%) blur(0px)' }}
      className="absolute w-full"
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
      <button
  className="md:hidden bg-transparent p-2"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Open Menu"
>
  {isOpen ? (
    // Иконка закрытия (иконка крестика)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    // Иконка бургера
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  )}
</button>

        <nav className="flex space-x-8 items-center">
          <ul className="hidden md:flex space-x-4 text-white">
            {Links.map((link) => (
              <li key={link.label}>
                <NavLink label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block text-white">PREMIFINO LTD</div>
        <div className="flex w-96 justify-end items-center">
          <button
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            className="p-2 rounded-md mr-4"
          >
            {t('contact')}
          </button>
          <LocaleSwitcher />
        </div>
      </div>

      {isOpen && (
        <div
          style={{ backgroundColor: 'rgba(255, 255, 255, 1)', backdropFilter: 'saturate(100%) blur(0px)' }}
          className="md:hidden"
        >
          <ul className="space-y-4 p-4">
            {Links.map((link) => (
              <li key={link.label}>
                <NavLink label={link.label} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
