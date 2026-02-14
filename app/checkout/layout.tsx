import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout - Green Tape Agro',
  description: 'Complete your order for premium organic compost. Secure checkout with WhatsApp support.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
