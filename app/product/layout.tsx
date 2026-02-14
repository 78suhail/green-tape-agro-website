import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pasteurized Organic Compost 10kg - Green Tape Agro | Buy Online',
  description: 'Premium pasteurized organic compost for gardens, farms & agriculture. ₹499 per 10kg bag. Lab-tested, certified quality. Free shipping on orders above ₹500. 30-day money-back guarantee.',
  keywords: [
    'organic compost',
    'pasteurized compost',
    'garden compost',
    'agricultural compost',
    'soil enrichment',
    'organic fertilizer',
    'farming',
    'gardening',
    'sustainable agriculture',
  ],
  openGraph: {
    title: 'Premium Organic Compost 10kg - ₹499',
    description: 'High-quality pasteurized organic compost for sustainable farming and gardening',
    url: 'https://greentapeagro.com/product',
    images: [
      {
        url: '/product-compost.jpg',
        width: 1200,
        height: 630,
        alt: 'Pasteurized Organic Compost 10kg',
      },
    ],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
