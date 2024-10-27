"use client"
import React from 'react';
import Link from 'next/link';
import { BlackFacebookIcon, BlackInstagramIcon } from './icons';
import { siteConfig } from '../../config/site';
import ContactForm from './contactForm.js';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Navigation');

  const handleScroll = (id: any) => (e: any) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="contact"
      className="w-full pb-20 h-auto mx-auto grid justify-center lg:flex"
    >
      <div className="mt-10 w-full lg:w-2/5 flex-1">
        <div className="">
          <ContactForm />
        </div>
      </div>
      <div className="w-1/5 lg:flex hidden items-center justify-center">
        <span className="w-[1px] h-full bg-black inline-block span-2"></span>
      </div>
      <div className=" flex justify-start mr-10 w-full lg:w-2/5 mt-8">
        <div className="mx-auto">
          <div className="flex gap-4 xl:gap-8">
            <a className="w-auto" href="#home" onClick={handleScroll('#home')}>
              {t('home')}
            </a>
            <a
              className="w-auto"
              href="#about"
              onClick={handleScroll('#about')}
            >
              {t('about')}
            </a>
            <a
              className="w-auto"
              href="#why-us"
              onClick={handleScroll('#why-us')}
            >
              {t('why us')}
            </a>
            <a
              className="w-auto"
              href="#contact"
              onClick={handleScroll('#contact')}
            >
              {t('contact')}
            </a>
          </div>
          <div className="flex text-center lg:text-left mt-14 gap-6 flex-col">
            <h2 className=" font-semibold uppercase">{t('contact')}</h2>
            <Link href="/">www.premifino.com</Link>
            <Link href="/">info@premifino.com</Link>
            <div className="flex justify-center lg:justify-start gap-4">
              <Link href={siteConfig.links.instagram} aria-label="Instagram">
                <BlackInstagramIcon className="text-black" />
              </Link>
              <Link href={siteConfig.links.facebook} aria-label="Facebook">
                <BlackFacebookIcon className="text-black cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
