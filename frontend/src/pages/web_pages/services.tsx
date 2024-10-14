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
  ContactFormDesigns,
  PricingDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

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

  const features_points = [
    {
      name: 'Secure Data Management',
      description:
        'Ensure the privacy and security of all interactions and data within the platform, providing peace of mind for counselors, students, and parents.',
      icon: 'mdiLock',
    },
    {
      name: 'Efficient Session Scheduling',
      description:
        'Easily schedule and manage sessions with intuitive tools that keep everyone organized and informed, reducing administrative burdens.',
      icon: 'mdiCalendar',
    },
    {
      name: 'Real-Time Notifications',
      description:
        'Stay updated with real-time notifications for session updates and assignments, ensuring timely communication and engagement.',
      icon: 'mdiBell',
    },
    {
      name: 'Comprehensive Reporting',
      description:
        'Access detailed reports and analytics to track progress and outcomes, helping to improve educational strategies and results.',
      icon: 'mdiChartLine',
    },
    {
      name: 'User-Friendly Interface',
      description:
        'Navigate the platform with ease thanks to a user-friendly design that simplifies complex tasks and enhances user experience.',
      icon: 'mdiMonitor',
    },
    {
      name: 'Customizable Workflows',
      description:
        'Tailor the platform to meet your specific needs with customizable workflows that adapt to your unique educational environment.',
      icon: 'mdiCog',
    },
  ];

  const pricing_features = {
    standard: {
      features: ['Secure Data Management', 'Efficient Session Scheduling'],
      limited_features: ['Basic Reporting', 'Limited Customizable Workflows'],
    },
    premium: {
      features: [
        'Secure Data Management',
        'Efficient Session Scheduling',
        'Real-Time Notifications',
      ],
      also_included: ['Advanced Reporting', 'Enhanced Customizable Workflows'],
    },
    business: {
      features: [
        'Secure Data Management',
        'Efficient Session Scheduling',
        'Real-Time Notifications',
        'Comprehensive Reporting',
        'Full Customizable Workflows',
        'Priority Support',
      ],
    },
  };

  const description = {
    standard:
      'Ideal for individual counselors or small teams looking to manage sessions securely and efficiently.',
    premium:
      'Perfect for small startups or agencies that require advanced features and enhanced workflows to support growing operations.',
    business:
      'Designed for enterprises needing comprehensive features, full customization, and priority support to manage large-scale operations.',
  };

  const faqs = [
    {
      question: 'What features are included in the Standard plan?',
      answer:
        'The Standard plan includes Secure Data Management and Efficient Session Scheduling, with basic reporting and limited customizable workflows.',
    },
    {
      question: 'How does the Premium plan differ from the Standard plan?',
      answer:
        'The Premium plan offers all Standard features plus Real-Time Notifications, Advanced Reporting, and Enhanced Customizable Workflows, ideal for growing businesses.',
    },
    {
      question: 'Is there a trial period available for ${projectName}?',
      answer:
        'Yes, we offer a 14-day free trial for new users to explore the features and benefits of ${projectName} before committing to a plan.',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      answer:
        'Absolutely! You can upgrade or downgrade your plan at any time through your account settings, allowing flexibility as your needs change.',
    },
    {
      question: 'What kind of support is available with the Business plan?',
      answer:
        'The Business plan includes priority support, ensuring that your queries and issues are addressed promptly by our dedicated support team.',
    },
    {
      question: 'Are there any discounts for educational institutions?',
      answer:
        'Yes, we offer special discounts for educational institutions. Please contact our sales team for more information on eligibility and pricing.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - Explore What ${projectName} Offers`}</title>
        <meta
          name='description'
          content={`Discover the range of services provided by ${projectName}, including secure session management, automated notifications, and more. Learn about our pricing and get in touch for more information.`}
        />
      </Head>
      <WebSiteHeader projectName={'themetest1'} pages={pages} />
      <main
        className={`flex-grow   bg-skyBlueTheme-websiteBG   rounded-none  `}
      >
        <HeroSection
          projectName={'themetest1'}
          image={['Service offerings illustration']}
          mainText={`Unlock the Power of ${projectName} Services`}
          subTitle={`Explore the comprehensive services offered by ${projectName} to enhance communication and management for counselors, students, and parents. Discover how we can support your educational journey.`}
          design={HeroDesigns.IMAGE_LEFT || ''}
          buttonText={`Discover Our Services`}
        />

        <FeaturesSection
          projectName={'themetest1'}
          image={['Feature highlights graphic']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover the powerful features of ${projectName} that enhance communication and streamline management for educational success.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'themetest1'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <FaqSection
          projectName={'themetest1'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} Services `}
        />

        <ContactFormSection
          projectName={'themetest1'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Customer support team illustration']}
          mainText={`Reach Out to ${projectName} Support `}
          subTitle={`We're here to assist you with any questions or concerns. Contact us anytime, and our team will respond promptly to ensure your experience with ${projectName} is seamless.`}
        />
      </main>
      <WebSiteFooter projectName={'themetest1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
