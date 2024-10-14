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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

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
      name: 'Secure Multi-Tenancy',
      description:
        'Each counselor manages their own group of students securely, ensuring privacy and personalized interactions within their own space.',
      icon: 'mdiLock',
    },
    {
      name: 'Comprehensive Session Management',
      description:
        'Schedule, record, and review sessions effortlessly. Access past recordings to enhance learning and counseling effectiveness.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'Automated Communication',
      description:
        'Keep everyone informed with automated notifications for new sessions and assignments, improving engagement and efficiency.',
      icon: 'mdiBellRing',
    },
  ];

  const testimonials = [
    {
      text: 'Using ${projectName} has transformed the way we manage our counseling sessions. The platform is intuitive and secure, making our work much more efficient.',
      company: 'FuturePath Solutions',
      user_name: 'Alice Johnson, Head Counselor',
    },
    {
      text: 'The automated notifications feature is a game-changer. It keeps everyone in the loop and ensures that no session is missed. Highly recommend ${projectName}!',
      company: 'EduBridge Consulting',
      user_name: 'Michael Smith, Operations Manager',
    },
    {
      text: "As a parent, I appreciate the transparency and ease of access to my child's session recordings. ${projectName} truly bridges the communication gap.",
      company: 'ParentConnect Inc.',
      user_name: 'Sarah Thompson, Parent',
    },
    {
      text: 'The multi-tenancy feature allows us to manage our students effectively without any data overlap. ${projectName} is a must-have for any educational institution.',
      company: 'LearnWell Academy',
      user_name: 'David Lee, Academic Director',
    },
    {
      text: "I love how ${projectName} simplifies session management. Scheduling and reviewing sessions has never been easier. It's a fantastic tool for counselors.",
      company: 'BrightFuture Counseling',
      user_name: 'Emily Davis, Senior Counselor',
    },
    {
      text: "The user-friendly interface and robust features of ${projectName} have significantly improved our workflow. It's an essential part of our daily operations.",
      company: 'Insightful Minds',
      user_name: 'James Wilson, Program Coordinator',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - Learn More About ${projectName}`}</title>
        <meta
          name='description'
          content={`Discover the mission, values, and team behind ${projectName}. Learn how we connect counselors, students, and parents in a secure environment.`}
        />
      </Head>
      <WebSiteHeader projectName={'themetest1'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'themetest1'}
          image={['Team collaboration and innovation']}
          mainText={`Discover the Heart of ${projectName}`}
          subTitle={`Learn about our mission and values that drive ${projectName} to connect counselors, students, and parents in a secure and efficient environment.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'themetest1'}
          image={['Mission-driven team collaboration']}
          mainText={`Our Mission and Vision at ${projectName}`}
          subTitle={`At ${projectName}, we are committed to creating a secure platform that enhances communication and management for counselors, students, and parents. Discover our journey and the values that guide us.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'themetest1'}
          image={['Feature highlights illustration']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Features`}
          subTitle={`Discover how ${projectName} empowers counselors, students, and parents with innovative features designed for seamless communication and management.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'themetest1'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'themetest1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
