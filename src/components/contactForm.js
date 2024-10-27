'use client';

import React, { useState } from 'react';
import { sendContactForm } from '../../pages/api/api';
import { useTranslations } from 'next-intl';

const initValues = { name: '', email: '', subject: '', message: '', phoneNumber: '' };
const initState = { isLoading: false, error: '', values: initValues };

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
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
    </div>
  );
}
