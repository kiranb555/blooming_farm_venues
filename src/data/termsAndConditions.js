export const termsAndConditions = {
  lastUpdated: new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    // month: 'long', 
    // day: 'numeric' 
  }),
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'Welcome to Blooming Farm Venues. These Terms and Conditions ("Terms") govern your use of our website and services.',
        'By accessing or using our services, you agree to be bound by these Terms.'
      ]
    },
    {
      id: 'booking-reservations',
      title: '2. Booking and Reservations',
      items: [
        'All bookings are subject to availability and our confirmation.',
        'A non-refundable deposit of 50% is required to secure your booking.',
        'Full payment is due 30 days prior to the event date.',
        // 'We require a security deposit of $500, refundable after the event pending inspection.'
      ]
    },
    {
      id: 'cancellation-policy',
      title: '3. Cancellation Policy',
      content: [
        'Cancellations made more than 30 days before the event will receive a full refund of their deposit. Cancellations within 30 days are non-refundable.',
        'In case of extreme weather conditions, we will work with you to reschedule.'
      ]
    },
    {
      id: 'venue-rules',
      title: '4. Venue Rules',
      items: [
        'No open flames except in designated areas.',
        'Music must end by 11:00 PM on all days.',
        'All decorations must be approved in advance.'
      ]
    },
    {
      id: 'liability-insurance',
      title: '5. Liability and Insurance',
      content: [
        'Blooming Farm Venues is not responsible for any loss, damage, or injury to persons or property during your event.',
        'We strongly recommend that you obtain event insurance to cover any unforeseen circumstances.'
      ]
    },
    {
      id: 'privacy-policy',
      title: '6. Privacy Policy',
      content: [
        'We respect your privacy and are committed to protecting your personal information.',
        'Your information will only be used in accordance with our Privacy Policy.'
      ]
    },
    {
      id: 'changes-to-terms',
      title: '7. Changes to Terms',
      content: [
        'We reserve the right to modify these Terms at any time.',
        'Any changes will be effective immediately upon posting on our website.'
      ]
    },
    {
      id: 'sms-consent',
      title: '8. SMS Consent Communication',
      content: [
        'Phone numbers obtained as part of the SMS consent process will not be shared, sold, or disclosed to third parties for marketing or promotional purposes. Your consent to receive SMS messages is used solely for communications from Blooming Farms LLC.'
      ]
    },
    {
      id: 'sms-types',
      title: '9. Types of SMS Communications',
      items: [
        'If you provide consent to receive SMS messages from Blooming Farms LLC, you may receive messages related to the following:',
        'Appointment confirmations and reminders',
        'Event scheduling or venue tour reminders',
        'Follow-up messages regarding inquiries or bookings',
        'Customer service communications related to your event',
        'Example message: "Hello, this is a reminder of your upcoming appointment with Blooming Farms Venue on [Date] at [Time]. Reply STOP to opt out of SMS messaging at any time."'
      ]
    },
    {
      id: 'message-frequency',
      title: '10. Message Frequency',
      content: [
        'Message frequency may vary depending on your interaction with Blooming Farms LLC.',
        'For example, you may receive up to five (5) SMS messages per week regarding appointment reminders, booking updates, or follow-up communications.'
      ]
    },
    {
      id: 'sms-fees',
      title: '11. Potential Fees for SMS Messaging',
      content: [
        'Standard message and data rates may apply depending on your mobile carrier\'s pricing plan. These charges may vary if messages are sent domestically or internationally.',
        'Blooming Farms LLC is not responsible for any messaging or data charges incurred by your mobile carrier.'
      ]
    },
    {
      id: 'opt-in-method',
      title: '12. Opt-In Method',
      items: [
        'You may opt in to receive SMS messages from Blooming Farms LLC in the following ways:',
        'Providing verbal consent during a phone conversation',
        'Submitting a form on our website and agreeing to receive SMS communications',
        'Requesting updates related to your venue booking or inquiry'
      ]
    },
    {
      id: 'opt-out-method',
      title: '13. Opt-Out Method',
      content: [
        'You may opt out of receiving SMS messages at any time by replying:',
        'STOP',
        'to any SMS message received from Blooming Farms LLC.',
        'After opting out, you will receive a confirmation message and will no longer receive SMS communications from us unless you opt in again.',
        'Alternatively, you may request removal from the messaging list by contacting us directly through our website.'
      ]
    },
    {
      id: 'help-support',
      title: '14. Help and Support',
      content: [
        'If you need assistance, reply with the keyword:',
        'HELP',
        'You may also obtain assistance by visiting:',
        'https://www.bloomingfarmsvenue.com/'
      ]
    },
    {
      id: 'standard-disclosures',
      title: '15. Standard Messaging Disclosures',
      items: [
        'Message and data rates may apply.',
        'Message frequency may vary.',
        'You may opt out at any time by texting STOP.',
        'For assistance, text HELP or visit our website.',
        'Consent to receive SMS messages is not a condition of purchase.'
      ]
    }
  ]
};
