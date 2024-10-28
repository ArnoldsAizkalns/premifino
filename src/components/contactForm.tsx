'use client';

import React, { useState, useEffect } from 'react';
import { sendContactForm } from '../../pages/api/api';
import { useTranslations } from 'next-intl';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber: string;
}

interface FormState {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initValues: FormValues = { name: '', email: '', subject: '', message: '', phoneNumber: '' };
const initState: FormState = { isLoading: false, error: '', values: initValues };

const ContactForm: React.FC = () => {
  const t = useTranslations("ContactForm");
  const [state, setState] = useState<FormState>(initState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [popUp, setPopUp] = useState<{ visible: boolean; message: string; success: boolean }>({ visible: false, message: '', success: false });

  const { values, isLoading, error } = state;

  const onBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [event.target.name]: true }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

    const onSubmit = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        showPopUp(t('messageSentSuccessfully'), true); // Успешное сообщение
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        showPopUp(t('messageNotSent'), false); // Ошибка отправки
      }
    };

  const showPopUp = (message: string, success: boolean) => {
    setPopUp({ visible: true, message, success });
    setTimeout(() => {
      setPopUp({ ...popUp, visible: false });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500 my-4 text-lg">{error}</p>}

      <div className="mb-5">
        <input
          type="text"
          className={`w-full p-2 rounded-sm bg-white border ${touched.name && !values.name ? 'border-red-500' : 'border-gray-300'}`}
          placeholder={t('nameAndSurname')}
          name="name"
          autoComplete="on"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.name && !values.name && <div className="text-xs text-red-500">Required</div>}
      </div>

      <div className="mb-5">
        <input
          placeholder={t('yourEmail')}
          className={`w-full p-2 rounded-sm bg-white border ${touched.email && !values.email ? 'border-red-500' : 'border-gray-300'}`}
          type="email"
          name="email"
          autoComplete="on"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.email && !values.email && <div className="text-xs text-red-500">Required</div>}
      </div>

      <div className="mb-5">
        <input
          placeholder={t('phoneNumber')}
          type="tel"
          className={`w-full p-2 rounded-sm bg-white border ${touched.phoneNumber && !values.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={onBlur}
          onKeyPress={(e) => {
            const char = String.fromCharCode(e.which);
            const pattern = /[0-9-()+. ]/;
            if (!pattern.test(char)) {
              e.preventDefault();
            }
          }}
        />
        {touched.phoneNumber && !values.phoneNumber && <div className="text-xs text-red-500">Required</div>}
      </div>

      <div className="mb-5">
        <input
          type="text"
          placeholder={t('subject')}
          className={`w-full p-2 rounded-sm bg-white border ${touched.subject && !values.subject ? 'border-red-500' : 'border-gray-300'}`}
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.subject && !values.subject && <div className="text-xs text-red-500">Required</div>}
      </div>

      <div className="mb-5">
        <textarea
          placeholder={t('enterYourMessage')}
          name="message"
          className={`w-full p-2 rounded-sm bg-white border ${touched.message && !values.message ? 'border-red-500' : 'border-gray-300'}`}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        {touched.message && !values.message && <div className="text-xs text-red-500">Required</div>}
      </div>

      <button
        className={`w-full p-3 mt-4 rounded-md ${isLoading ? 'bg-gray-500' : 'bg-black'} text-white`}
        onClick={onSubmit}
        disabled={isLoading}
      >
        {t('sendMessage')}
      </button>

      {/* Всплывающее окно */}
      {popUp.visible && (
        <div className={`fixed w-full  bottom-[10%] flex justify-center`}>
          <div className={`bg-white border border-slate-200 p-4 rounded shadow-xl mt-4`}>
            <p className={`${popUp.success ? 'text-green-600' : 'text-red-600'} text-center font-bold`}>{popUp.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
