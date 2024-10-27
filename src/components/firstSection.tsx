"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

export default function FirstSection() {
  const t = useTranslations("First");

  return (
    <section id="home" className="first-bg h-screen">
      <div className="">
        <div className="text-white mx-auto flex-col max-w-7xl text-center justify-center">
          <h2 className="mt-28 text-xs font-bold ltspsg">
            {t('welcomeMessage')}
          </h2>
          <h1 className="xl:text-[168px] lg:text-[120px] md:text-[90px] sm:text-[70px] text-[50px] mt-12 md:leading-[185px] leading-[95px] font-semibold">
            {t('headline')}
          </h1>
          <div className="max-w-lg mt-[4.6rem] mx-auto">
            <p className="text-[16px] leading-6 tracking-wide">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
