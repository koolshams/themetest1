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
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      question: 'What is ${projectName} and how does it work?',
      answer:
        '${projectName} is a platform designed to enhance communication and management among counselors, students, and parents. It offers features like secure data management, session scheduling, and real-time notifications.',
    },
    {
      question: 'How can I sign up for ${projectName}?',
      answer:
        "To sign up, visit our homepage and click on the 'Sign Up' button. Fill in the required details and verify your email to activate your account.",
    },
    {
      question: 'What are the pricing plans available?',
      answer:
        '${projectName} offers three pricing plans: Standard, Premium, and Business. Each plan is tailored to meet different needs, from individuals to large enterprises.',
    },
    {
      question: 'Can I customize the features in ${projectName}?',
      answer:
        'Yes, ${projectName} allows for customizable workflows and dashboards, enabling you to tailor the platform to suit your specific requirements.',
    },
    {
      question: 'Is my data secure on ${projectName}?',
      answer:
        'Absolutely. We use advanced encryption and conduct regular security audits to ensure that your data is protected and accessible only to authorized users.',
    },
    {
      question: 'How do I contact support if I need help?',
      answer:
        'You can reach our support team via the contact form on our website or by emailing support@projectname.com. We aim to respond within 24 hours.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and how to get the most out of our platform.`}
        />
      </Head>
      <WebSiteHeader projectName={'themetest1'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'themetest1'}
          image={['FAQ section illustration']}
          mainText={`Your Questions Answered at ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Get the information you need to make the most of our platform.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'themetest1'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />

        <ContactFormSection
          projectName={'themetest1'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Customer support assistance']}
          mainText={`Get Support from ${projectName} Team `}
          subTitle={`Have more questions? Reach out to us anytime, and our support team will respond promptly to assist you with any inquiries about ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'themetest1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
