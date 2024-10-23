'use client';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { sendContactForm } from '../../pages/api/api';
import { useTranslations } from 'next-intl';

const initValues = { name: '', email: '', subject: '', message: '' };
const initState = { isLoading: false, error: '', values: initValues };

export default function ContactForm() {
  const t = useTranslations();
  const toast = useToast();
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
      toast({
        title: 'Message sent.',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <Input
          className=""
          type="text"
          rounded="sm"
          _placeholder={{
            color: 'gray.700',
          }}
          bg="white"
          placeholder={t('nameAndSurname')}
          name="name"
          autoComplete="on"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <Input
          placeholder={t('yourEmail')}
          _placeholder={{
            color: 'gray.700',
          }}
          bg="white"
          type="email"
          name="email"
          rounded="sm"
          autoComplete="on"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={() => setTouched({ ...touched, email: true })}
          isInvalid={
            (touched.email && !values.email) ||
            (touched.email &&
              !/^[\w.-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$/.test(values.email))
          }
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.phoneNumber && !values.phoneNumber}
      >
        <Input
          placeholder={t('phoneNumber')}
          type="tel"
          _placeholder={{
            color: 'gray.700',
          }}
          bg="white"
          name="phoneNumber"
          rounded="sm"
          errorBorderColor="red.300"
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
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.subject && !values.subject}
        mb={5}
      >
        <Input
          className=""
          type="text"
          placeholder={t('subject')}
          name="subject"
          _placeholder={{
            color: 'gray.700',
          }}
          bg="white"
          rounded="sm"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <Textarea
          placeholder={t('enterYourMessage')}
          name="message"
          _placeholder={{
            color: 'gray.700',
          }}
          bg="white"
          rounded="sm"
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        size="md"
        height="48px"
        width="full"
        rounded="sm"
        border="2px"
        bg="black"
        borderColor="white"
        color="white"
        borderRadius={'lg'}
        isLoading={isLoading}
        onClick={onSubmit}
      >
        {t('sendMessage')}
      </Button>
    </Container>
  );
}
