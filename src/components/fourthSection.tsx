"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import villa1 from '../../public/villa1.jpeg';
import building2 from '../../public/building2.jpg';
import stair3 from '../../public/stair3.jpeg';

export default function FourthSection() {
  const t = useTranslations("Fourth");

  return (
    <section id="why-us" className="h-auto md:mb-20 px-2 max-w-7xl mx-auto">
      <div className="flex flex-col mx-auto items-center text-center justify-between">
        <div className="md:mt-40 mt-10">
          <h2 className="uppercase text-sm">{t('whyUsTitle')}</h2>
          <h1 className="text-4xl mt-6 font-normal tracking-wide">
            {t('whyUsSubtitle')}
          </h1>
        </div>
        <ul className="lg:flex !items-center grid gap-6 mt-10 justify-between">
          <li className="li-block">
            <p>01</p>
            <h2 className="uppercase font-semibold text-xl">
              {t('enduringQualityTitle')}
            </h2>
            <p>{t('enduringQualityDescription')}</p>
          </li>
          <span className="hidden span-line"></span>
          <li className="li-block">
            <p>02</p>
            <h2 className="uppercase font-semibold text-xl">
              {t('functionalDesignTitle')}
            </h2>
            <p>{t('functionalDesignDescription')}</p>
          </li>
          <span className="hidden span-line"></span>
          <li className="li-block">
            <p>03</p>
            <h2 className="uppercase font-semibold text-xl">
              {t('trueComfortTitle')}
            </h2>
            <p>{t('trueComfortDescription')}</p>
          </li>
          <span className="hidden span-line"></span>
          <li className="li-block">
            <p>04</p>
            <h2 className="uppercase font-semibold text-xl">
              {t('timelessAppealTitle')}
            </h2>
            <p>{t('timelessAppealDescription')}</p>
          </li>
        </ul>
        <div className="xl:gap-12 hidden md:flex md:gap-6 w-full gap-2 mt-14">
          <div className="card w-1/3 h-[500px] md:h-[600px] relative bg-center bg-cover" style={{ backgroundImage: `url(${villa1.src})` }}>
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="border w-[150px] sm:w-[200px] md:w-[220px] xl:w-[350px] h-[200px] flex items-center duration-300 hover:scale-105">
                <h2 className="text-white text-xl xl:text-3xl">
                  {t('luxuryConvenience')}
                </h2>
              </div>
              <span className="w-[60px] mt-6 bg-white h-[2px] inline-block;"></span>
            </div>
          </div>
          <div className="card w-1/3 h-[500px] md:h-[600px] relative bg-center bg-cover" style={{ backgroundImage: `url(${building2.src})` }}>
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="w-[150px] sm:w-[200px] md:w-[220px] xl:w-[350px] h-[200px] flex items-center">
                <h2 className="text-white text-xl xl:text-3xl">
                  {t('locationCommunityQuality')}
                </h2>
              </div>
              <Link
                href="/contact"
                className="text-white h-auto border-b mt-4 duration-300 hover:scale-110"
              >
                {t('contactLink')}
              </Link>
            </div>
          </div>
          <div className="card w-1/3 h-[500px] md:h-[600px] relative bg-center bg-cover" style={{ backgroundImage: `url(${stair3.src})` }}>
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <div className="border w-[150px] sm:w-[200px] md:w-[220px] xl:w-[350px] h-[200px] flex items-center duration-300 hover:scale-105">
                <h2 className="text-white text-xl xl:text-3xl">
                  {t('beautyPassion')}
                </h2>
              </div>
              <span className="w-[60px] mt-6 bg-white h-[2px] inline-block;"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
