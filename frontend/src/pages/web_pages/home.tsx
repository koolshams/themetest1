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
  FeaturesDesigns,
  AboutUsDesigns,
  FaqDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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

  const features_points = [
    {
      name: 'Multi-Tenant Management',
      description:
        'Each counselor operates independently, managing their own group of students securely. This ensures privacy and tailored interactions within ${projectName}.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Session Recording',
      description:
        'Easily schedule and record sessions with students. Access past recordings to review and improve counseling effectiveness.',
      icon: 'mdiVideo',
    },
    {
      name: 'Automated Notifications',
      description:
        'Keep everyone informed with automated email notifications for new sessions and counselor assignments, enhancing communication efficiency.',
      icon: 'mdiEmailAlert',
    },
  ];

  const faqs = [
    {
      question: 'What is the main purpose of ${projectName}?',
      answer:
        '${projectName} is designed to facilitate communication and management among counselors, students, and parents in a secure multi-tenant environment, ensuring privacy and efficiency.',
    },
    {
      question: 'How does the multi-tenant system work?',
      answer:
        "Each counselor operates independently, managing their own group of students. This ensures that data and interactions are kept private within each counselor's group.",
    },
    {
      question: 'Can I access past session recordings?',
      answer:
        'Yes, students and counselors can access past session recordings through the platform, allowing for review and continuous improvement.',
    },
    {
      question: 'How are notifications handled in ${projectName}?',
      answer:
        'Automated email notifications are sent to students and parents for new sessions and counselor assignments, keeping everyone informed and engaged.',
    },
    {
      question: 'Is there a public interface for the portal?',
      answer:
        'Currently, ${projectName} focuses on secure interactions within the platform. A public interface is not available, but future updates may include additional features.',
    },
    {
      question: 'How can I get started with ${projectName}?',
      answer:
        "Simply sign up on our platform, and you'll be guided through the setup process to start managing your counseling sessions efficiently.",
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Welcome to Our Multi-Tenant Counseling Portal`}</title>
        <meta
          name='description'
          content={`Connect with counselors, students, and parents in a secure and efficient multi-tenant environment. Discover our features and get started today.`}
        />
      </Head>
      <WebSiteHeader projectName={'themetest1'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'themetest1'}
          image={['Counselor guiding a student']}
          mainText={`Empower Connections with ${projectName} Portal`}
          subTitle={`Experience seamless communication and management among counselors, students, and parents in a secure multi-tenant environment. Enhance your educational journey with ${projectName}.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'themetest1'}
          image={['Features overview illustration']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Explore how ${projectName} enhances communication and management for counselors, students, and parents in a secure environment.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'themetest1'}
          image={['Team collaboration and support']}
          mainText={`Connecting Minds with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to fostering meaningful connections between counselors, students, and parents. Our platform ensures a secure and efficient environment for educational growth.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
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
          image={['Contact support illustration']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`We're here to help! Reach out to us with any questions or feedback, and we'll respond promptly to assist you.`}
        />
      </main>
      <WebSiteFooter projectName={'themetest1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
