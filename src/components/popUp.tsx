'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

type ModalProps = {
  content?: string;
  agreeText?: string;
};

const PopUp = ({ content, agreeText }: ModalProps) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const t = useTranslations("Modal");

  useEffect(() => {
    const isModalShown = sessionStorage.getItem('isModalShown');
    if (!isModalShown) {
      setIsModalShown(true);
      document.body.classList.add('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleAgree = () => {
    setIsModalShown(false);
    sessionStorage.setItem('isModalShown', 'true');
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('no-scroll');
  };

  return (
    <>
      {isModalShown && (
        <div className="fixed popup inset-0 z-50 flex items-end justify-end p-2">
          <div className="absolute "></div>
          <div className="z-10 overflow-hidden bg-white rounded-lg">
            <div className="px-4 text-center bg-gray-100 border-2 py-2 max-w-[420px]">
              <p className="text-lg text-gray-900">{content || t('modalContent')}</p>

              <div className="flex justify-center mt-4">
                <button
                  onClick={handleAgree}
                  className="h-12 w-48 border-2 bg-[#22255f] border-white text-white duration-300 hover:scale-105"
                >
                  {agreeText || t('modalAgreeText')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
