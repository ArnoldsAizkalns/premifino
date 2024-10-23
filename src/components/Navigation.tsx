'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import LocaleSwitcher from './LocaleSwitcher';

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
      }}
      href={href}
      bg="transparent"
      onClick={handleClick}
    >
      {label}
    </Box>
  );
};

export default function WithAction() {
  const t = useTranslations('Navigation');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '#about' },
    { label: t('why us'), href: '#why-us' },
    { label: t('contact'), href: '#contact' },
  ];

  const headerBgColor = isOpen
    ? 'rgba(255, 255, 255, 1)'
    : 'rgba(255, 255, 255, 0.1)';
  const buttonBgColor = isOpen ? 'black' : 'white';
  const buttonTextColor = isOpen ? 'white' : 'black';

  return (
    <>
      <Box
        as="header"
        position="absolute"
        backgroundColor={headerBgColor}
        backdropFilter="saturate(100%) blur(0px)"
        w="100%"
      >
        <Flex
          className="max-w-7xl"
          mx={'auto'}
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            bg={'white'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              color={'white'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} />
              ))}
            </HStack>
          </HStack>
          <Box className="hidden lg:block" color={'white'}>
            PREMIFINO LTD
          </Box>
          <Flex w={400} justifyContent={'right'} alignItems={'center'}>
            <Button
              variant={'solid'}
              bg={buttonBgColor}
              color={buttonTextColor}
              size={'sm'}
              mr={4}
            >
              {t('contact')}
            </Button>
            <Menu>
              <LocaleSwitcher />
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            backgroundColor="rgba(255, 255, 255, 1)"
            backdropFilter="saturate(100%) blur(0px)"
            display={{ md: 'none' }}
          >
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
