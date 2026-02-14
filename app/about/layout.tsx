import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Green Tape Agro - Premium Organic Compost Producer',
  description: 'Learn about Green Tape Agro Industries - leading producer of premium organic compost since 2015. Our mission, values, and commitment to sustainable agriculture.',
  openGraph: {
    title: 'About Green Tape Agro Industries',
    description: 'Premium organic compost producer serving 50,000+ farmers and gardeners across India',
    url: 'https://greentapeagro.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
