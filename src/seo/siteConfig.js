export const siteConfig = {
  name: 'Aloda',
  legalName: 'Aloda',
  founderName: 'Bac si Anh',
  founderDisplayName: 'Bac si Anh',
  siteUrl: 'https://example.com', // TODO: Replace with the real Aloda domain.
  defaultTitle: 'Aloda | Tu van da lieu va cham soc da theo dinh huong khoa hoc',
  defaultDescription:
    'Aloda la nen tang noi dung va giai phap cham soc da do Bac si Anh dinh huong, tap trung vao tu van da mun, phan tich hoat chat va xay dung lo trinh cham soc da ro rang.',
  contactEmail: 'hello@aloda.vn',
  contactPhone: '1900 0000',
  addressLocality: 'Ho Chi Minh City',
  addressCountry: 'VN',
  keywords: [
    'Aloda',
    'tu van da mun',
    'cham soc da',
    'bac si anh',
    'phan tich hoat chat my pham',
    'routine cham soc da',
  ],
};

export function getAbsoluteUrl(path = '/') {
  return new URL(path, siteConfig.siteUrl).toString();
}
