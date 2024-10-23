import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import FirstSection from './firstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import FifthSection from './fifthSection';
import ContactSection from './contactSection';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <span className="h-[1px] hidden mt-10 bg-black lg:inline-block span-2"></span>
      <ContactSection />
    </>
  );
}
