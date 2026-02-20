import React from 'react';

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OrviumStudio",
    "alternateName": "Orvium Studio",
    "url": "https://orviumstudio.com",
    "logo": "https://orviumstudio.com/logoor.png",
    "description": "Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "AR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "orviumstudio@gmail.com"
    },
    "sameAs": [
      "https://twitter.com/orviumstudio",
      "https://linkedin.com/company/orviumstudio",
      "https://facebook.com/orviumstudio"
    ],
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Patrick Developer"
      },
      {
        "@type": "Person", 
        "name": "Tomas Zalazar"
      },
      {
        "@type": "Person",
        "name": "Gonzalo Miguel"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -34.6037,
        "longitude": -58.3816
      },
      "geoRadius": "1000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Desarrollo Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Sitios web modernos y responsivos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Aplicaciones Web",
            "description": "Aplicaciones web personalizadas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce",
            "description": "Tiendas online y plataformas de venta"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría Web",
            "description": "Asesoramiento en estrategias digitales"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OrviumStudio",
    "url": "https://orviumstudio.com",
    "description": "Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas.",
    "publisher": {
      "@type": "Organization",
      "name": "OrviumStudio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://orviumstudio.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://orviumstudio.com/#localbusiness",
    "name": "OrviumStudio",
    "image": "https://orviumstudio.com/logoor.png",
    "description": "Desarrollo web profesional en Buenos Aires. Creamos sitios web modernos, e-commerce y aplicaciones web personalizadas.",
    "url": "https://orviumstudio.com",
    "telephone": "+1-555-123-4567",
    "email": "orviumstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -34.6037,
        "longitude": -58.3816
      },
      "geoRadius": "1000000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
};
