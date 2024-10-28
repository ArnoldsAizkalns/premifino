"use client"
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ThirdSection() {
  const t = useTranslations("Third");

  return (
    <section className="xl:h-[70vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] h-[30vh] mt-4 lg:mt-0 w-full ThirdSectionBack text-center flex items-center justify-center mx-auto">
        <h1 className="uppercase max-w-7xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl sm:leading-[2.5rem] lg:leading-[3.5rem] xl:leading-[4.5rem] text-white font-semibold">
          {t('weBuildMessage')}
        </h1>
    </section>
  );
}
