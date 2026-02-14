import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Green Tape Agro - Get in Touch',
  description: 'Contact Green Tape Agro Industries for organic compost inquiries, bulk orders, and farming solutions. Phone, email, WhatsApp support available.',
  openGraph: {
    title: 'Contact Us - Green Tape Agro',
    description: 'Get in touch with Green Tape Agro Industries for premium organic compost and agricultural solutions',
    url: 'https://greentapeagro.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
