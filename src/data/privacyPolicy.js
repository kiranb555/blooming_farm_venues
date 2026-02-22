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
        'Payment and billing information',
        'Phone numbers for SMS notifications (only with explicit consent)'
      ]
    },
    {
      id: 'information-usage',
      title: '2. How We Use Your Information',
      description: '',
      items: [
        'Process bookings and payments',
        'Communicate about your event',
        'Improve our services',
        'Send SMS notifications about events and updates (only with explicit consent)'
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
        'You can browse our website anonymously without providing any personal information',
        'We do not share your opt-in information for SMS with third parties',
        'No mobile opt-in or text message consent will be shared with third parties or affiliates',
        // 'You can opt-out of SMS communications at any time by replying STOP to any SMS message'
      ]
    },
    {
      id: 'sms-communications',
      title: '4. SMS Communications',
      description: 'If you opt-in to receive SMS notifications:',
      items: [
        'Reply STOP to opt-out at any time',
        'Reply HELP for support',
        'Message and data rates may apply',
        // 'Messaging frequency may vary',
        'We obtain explicit consent before sending SMS'
      ]
    },
    {
      id: 'contact-us',
      title: '5. Contact Us',
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
