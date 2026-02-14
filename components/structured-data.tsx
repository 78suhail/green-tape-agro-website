export function ProductStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pasteurized Organic Compost 10kg',
    image: 'https://greentapeagro.com/product-compost.jpg',
    description:
      'Premium quality pasteurized organic compost perfect for agriculture, gardening, and farming. Contains essential nutrients and beneficial microorganisms.',
    brand: {
      '@type': 'Brand',
      name: 'Green Tape Agro Industries',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Green Tape Agro Industries',
      url: 'https://greentapeagro.com',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://greentapeagro.com/product',
      priceCurrency: 'INR',
      price: '499',
      priceValidUntil: '2024-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Green Tape Agro Industries',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '245',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Rajesh Kumar',
        },
        reviewBody: 'Best compost I have used in 20 years of farming. My yield increased by 35% this season!',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Priya Singh',
        },
        reviewBody: 'My plants have never looked healthier. Highly recommend for all gardeners.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Green Tape Agro Industries',
    url: 'https://greentapeagro.com',
    logo: 'https://greentapeagro.com/logo.png',
    description: 'Premium organic compost producer for sustainable agriculture and gardening',
    sameAs: [
      'https://www.facebook.com/greentapeagro',
      'https://www.instagram.com/greentapeagro',
      'https://www.twitter.com/greentapeagro',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+91-9876543210',
      email: 'info@greentapeagro.com',
      contactOption: 'TollFree',
      areaServed: 'IN',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Agriculture Lane',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
