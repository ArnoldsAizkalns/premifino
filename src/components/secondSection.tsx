"use client"
import React from 'react';
import Image from 'next/image';
import smallPicture from '../../public/SecondSectionSmallPicture.jpg';
import { useTranslations } from 'next-intl';

export default function SecondSection() {
  const t = useTranslations("Second");

  const handleScrollToContact = (event: any) => {
    event.preventDefault();
    const section = document.querySelector('#contact');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="about"
      className="md:h-screen py-8 mx-auto flex items-center justify-center max-w-7xl"
    >
      <div className="flex-col lg:flex-row lg:flex items-center h-auto px-2 2xl:px-0">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left h-[100%] space-y-4 overflow-hidden">
          <h2>{t('aboutUsTitle')}</h2>
          <h2 className="w-[80%] text-2xl xl:text-3xl 2xl:text-4xl">
            {t('aboutUsSubtitle')}
          </h2>
          <p className="md:w-4/5">{t('aboutUsDescription')}</p>
          <button onClick={handleScrollToContact} className="text-white rounded-lg text-sm w-[150px] bg-black">
            <p className="px-2 py-2">{t('contactButton')}</p>
          </button>
        </div>
        <div className="lg:w-1/2 hidden mt-4 lg:mt-0  h-full lg:flex items-center justify-center">
          <Image
            alt=""
            src={smallPicture}
            className="w-full rounded-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
}
