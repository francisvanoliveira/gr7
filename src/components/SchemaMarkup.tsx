
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GR7 Tecnologia',
    url: 'https://gr7tecnologia.com.br',
    logo: 'https://gr7tecnologia.com.br/uploads/GR7.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-92-99100-0125',
      contactType: 'Customer Service',
      email: 'guilherme@gr7tecnologia.com.br',
    },
    sameAs: [],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GR7 Tecnologia',
    image: 'https://gr7tecnologia.com.br/uploads/GR7.png',
    '@id': 'https://gr7tecnologia.com.br',
    url: 'https://gr7tecnologia.com.br',
    telephone: '(92) 99100-0125',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Belo Horizonte, 240-A, Sala 123, DaVinci Hotel - Adrianópolis',
      addressLocality: 'Manaus',
      addressRegion: 'AM',
      postalCode: '69057-060',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -3.11531,
      longitude: -60.0165,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
