import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'themetest1';
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const faqs = [
    {
      question: 'How do I create an account on ${projectName}?',
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and fill in the required details. You'll receive a confirmation email to activate your account.",
    },
    {
      question: 'What should I do if I forget my password?',
      answer:
        "If you forget your password, click on 'Forgot Password' on the login page. Follow the instructions to reset your password via the email associated with your account.",
    },
    {
      question: 'Can I customize my dashboard on ${projectName}?',
      answer:
        'Yes, ${projectName} allows you to customize your dashboard to suit your preferences. You can add or remove widgets and rearrange them as needed.',
    },
    {
      question: 'How secure is my data on ${projectName}?',
      answer:
        'We prioritize your data security with advanced encryption and regular security audits. Your information is safe and accessible only to authorized users.',
    },
    {
      question: 'Is there a mobile app for ${projectName}?',
      answer:
        'Currently, ${projectName} is accessible via web browsers on mobile devices. We are working on a dedicated mobile app to enhance your experience.',
    },
    {
      question: 'How can I contact support if I have an issue?',
      answer:
        'You can contact our support team through the contact form on our website or by emailing support@projectname.com. We aim to respond within 24 hours.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Contact Us - Get in Touch with ${projectName}`}</title>
        <meta
          name='description'
          content={`Reach out to ${projectName} for any inquiries or support. Our team is here to assist you with any questions or concerns you may have.`}
        />
      </Head>
      <WebSiteHeader projectName={'themetest1'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'themetest1'}
          image={['Customer service representative']}
          mainText={`Connect with ${projectName} Support Team`}
          subTitle={`Have questions or need assistance? Our dedicated support team is here to help you with any inquiries about ${projectName}. Reach out to us today.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Contact Us Now`}
        />

        <FaqSection
          projectName={'themetest1'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'themetest1'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Email communication illustration']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`We're available to assist you with any questions or feedback. Send us a message, and our team will respond promptly to ensure your experience with ${projectName} is seamless.`}
        />
      </main>
      <WebSiteFooter projectName={'themetest1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
