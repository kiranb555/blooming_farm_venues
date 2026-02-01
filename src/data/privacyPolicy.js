import { 
  FORMATED_PHONE, 
  EMAIL, 
  ADDRESS 
} from '@/components/utils/constants';

export const privacyPolicyData = {
  lastUpdated: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    // month: 'long', 
    // day: 'numeric' 
  }),
  sections: [
    {
      id: 'information-collected',
      title: '1. Information We Collect',
      description: 'We collect information that you provide directly, including:',
      items: [
        'Contact details (name, email, phone)',
        'Event information and preferences',
        'Payment and billing information'
      ]
    },
    {
      id: 'information-usage',
      title: '2. How We Use Your Information',
      description: '',
      items: [
        'Process bookings and payments',
        'Communicate about your event',
        'Improve our services'
      ]
    },
    {
      id: 'your-rights',
      title: '3. Your Rights',
      description: 'We respect your privacy and want to be transparent about our data practices:',
      items: [
        'We do not collect or store personal information from casual visitors to our website',
        'If you contact us through our website, we only use your information to respond to your inquiry',
        'We do not use cookies or tracking technologies that collect personal data',
        'You can browse our website anonymously without providing any personal information'
      ]
    },
    {
      id: 'contact-us',
      title: '4. Contact Us',
      description: 'For privacy-related questions or requests, contact us at:',
      contactInfo: {
        email: EMAIL,
        phone: `(${FORMATED_PHONE.substring(0, 3)}) ${FORMATED_PHONE.substring(4, 7)}-${FORMATED_PHONE.substring(8)}`,
        address: ADDRESS
      },
      note: 'We may update this policy periodically. Please check back for changes.'
    }
  ]
};
