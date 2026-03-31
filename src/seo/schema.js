import { getAbsoluteUrl, siteConfig } from '@/seo/siteConfig';

function sanitizeDescription(value) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function buildOrganizationSchema() {
  const organizationId = getAbsoluteUrl('/#organization');
  const founderId = getAbsoluteUrl('/doi-ngu#bac-si-anh');

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': organizationId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      description: siteConfig.defaultDescription,
      email: siteConfig.contactEmail,
      telephone: siteConfig.contactPhone,
      founder: {
        '@id': founderId,
      },
      areaServed: 'VN',
      knowsAbout: [
        'Tu van da mun',
        'Cham soc da nhay cam',
        'Phan tich bang thanh phan my pham',
        'Xay dung routine cham soc da',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.addressLocality,
        addressCountry: siteConfig.addressCountry,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': founderId,
      name: siteConfig.founderDisplayName,
      jobTitle: 'Founder & Skin Expert',
      worksFor: {
        '@id': organizationId,
      },
      description:
        'Bac si Anh la nguoi dinh huong noi dung chuyen mon tai Aloda, tap trung vao tu van da mun, phan tich hoat chat va lo trinh cham soc da phu hop tung tinh trang.',
      knowsAbout: [
        'Da mun',
        'Da nhay cam',
        'Hoat chat my pham',
        'Routine cham soc da',
      ],
      url: getAbsoluteUrl('/about'),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': getAbsoluteUrl('/#website'),
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      publisher: {
        '@id': organizationId,
      },
      inLanguage: 'vi-VN',
    },
  ];
}

export function buildWebPageSchema({
  path = '/',
  title,
  description,
  type = 'WebPage',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${getAbsoluteUrl(path)}#webpage`,
    url: getAbsoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      '@id': getAbsoluteUrl('/#website'),
    },
    about: {
      '@id': getAbsoluteUrl('/#organization'),
    },
    inLanguage: 'vi-VN',
  };
}

export function buildProductSchema(product) {
  const selectedVariant = product.variants[0];
  const priceInCents = selectedVariant.sale_price_in_cents ?? selectedVariant.price_in_cents;
  const description = sanitizeDescription(product.description || product.subtitle || product.title);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${getAbsoluteUrl(`/product/${product.id}`)}#product`,
    name: product.title,
    description,
    image: product.images?.map((image) => image.url).filter(Boolean),
    sku: selectedVariant.id,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    category: 'Skin Care Service',
    manufacturer: {
      '@id': getAbsoluteUrl('/#organization'),
    },
    offers: {
      '@type': 'Offer',
      url: getAbsoluteUrl(`/product/${product.id}`),
      priceCurrency: selectedVariant.currency_info?.code || 'VND',
      price: (priceInCents / 100).toFixed(2),
      availability:
        product.purchasable && (!selectedVariant.manage_inventory || selectedVariant.inventory_quantity > 0)
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      seller: {
        '@id': getAbsoluteUrl('/#organization'),
      },
    },
  };
}
