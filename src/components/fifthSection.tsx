"use client"
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SliderSection from './sliderSection';
import apart1 from '../../public/sliderSection/5.1.png';
import apart2 from '../../public/sliderSection/5.2.png';
import apart3 from '../../public/sliderSection/5.3.png';
import apart4 from '../../public/sliderSection/5.4.png';

export default function FifthSection() {
  const t = useTranslations("Fifth");

  return (
    <section className="bg-gray-100 md:pb-20 pb-10 mt-10 md:mt-20 font-allura font-sans px-0.5 h-auto">
      <div className="md:pt-40 pt-10 pb-10 md:pb-20 flex flex-col items-center gap-12">
        <div className="grid sm:grid-cols-2 items-center gap-4">
          <h4 className="text-4xl sm:text-5xl xl:text-7xl">
            {t('weBuildFor')}
          </h4>
          <Image src={apart1} alt="interior" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-4">
          <h4 className="text-4xl sm:text-5xl xl:text-7xl">{t('families')}</h4>
          <Image src={apart2} alt="apartment" />
          <h4 className="text-4xl sm:text-5xl xl:text-7xl">{t('crafting')}</h4>
          <Image src={apart3} alt="игшдвштп" />
        </div>

        <div className="grid md:grid-cols-3 items-center gap-4">
          <h4 className="text-4xl sm:text-5xl xl:text-7xl justify-center flex">
            {t('spacesFor')}
          </h4>
          <Image className="" src={apart4} alt="backyard" />
          <h4 className="text-4xl sm:text-5xl xl:text-7xl justify-center flex">
            {t('memories')}
          </h4>
        </div>
      </div>
      <SliderSection />
    </section>
  );
}
