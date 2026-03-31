const defaultCurrency = {
  code: 'VND',
  locale: 'vi-VN',
  symbol: 'VND',
};

const rawProducts = [
  {
    id: 'tu-van-da-mun-chuyen-sau',
    title: 'Tu van da mun chuyen sau',
    subtitle: 'Danh gia tinh trang da, thoi quen va tac nhan gay mun theo tung giai doan',
    ribbon_text: 'Pho bien',
    purchasable: true,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' },
      { url: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80' },
    ],
    description: '<p>Goi tu van nay giup ban hieu ro tinh trang da mun, nguyen nhan kich ung va cach sap xep routine giam nguy co bung phat trong sinh hoat hang ngay.</p>',
    additional_info: [
      { id: 'tu-van-da-mun-noi-dung', order: 1, title: 'Noi dung bao gom', description: '<p>Danh gia da, xac dinh nhom mun, huong dan su dung hoat chat va toi uu routine sang toi.</p>' },
      { id: 'tu-van-da-mun-phu-hop', order: 2, title: 'Phu hop voi', description: '<p>Nguoi gap tinh trang mun an, mun viem, de kich ung hoac chua biet bat dau cham soc da tu dau.</p>' },
    ],
    variants: [
      {
        id: 'tu-van-da-mun-online',
        title: 'Tu van online 1:1',
        price_in_cents: 8900000,
        sale_price_in_cents: 7900000,
        inventory_quantity: 4,
        manage_inventory: true,
      },
    ],
  },
  {
    id: 'phac-do-phuc-hoi-da-nhay-cam',
    title: 'Phac do phuc hoi da nhay cam',
    subtitle: 'Rut gon buoc cham soc va uu tien hang rao bao ve da',
    ribbon_text: 'Duoc quan tam',
    purchasable: true,
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80' },
      { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' },
    ],
    description: '<p>Lo trinh danh cho lan da de do, cham chich va phan ung voi nhieu san pham. Aloda uu tien su on dinh cua da truoc khi tang cuong dieu tri.</p>',
    additional_info: [
      { id: 'phuc-hoi-da-nhay-cam-dau-muc', order: 1, title: 'Dau muc trien khai', description: '<p>Ra soat san pham dang dung, loai bo yeu to de gay kich ung va xay dung routine toi gian de theo doi.</p>' },
      { id: 'phuc-hoi-da-nhay-cam-thoi-gian', order: 2, title: 'Thoi gian theo doi', description: '<p>De xuat moc danh gia lai sau 2 den 4 tuan de cap nhat phan ung cua da.</p>' },
    ],
    variants: [
      {
        id: 'phuc-hoi-da-nhay-cam-co-ban',
        title: 'Goi co ban',
        price_in_cents: 6900000,
        sale_price_in_cents: null,
        inventory_quantity: 2,
        manage_inventory: true,
      },
      {
        id: 'phuc-hoi-da-nhay-cam-mo-rong',
        title: 'Goi mo rong',
        price_in_cents: 8900000,
        sale_price_in_cents: null,
        inventory_quantity: 1,
        manage_inventory: true,
        image_url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    id: 'routine-lam-sang-ca-nhan-hoa',
    title: 'Routine lam sang ca nhan hoa',
    subtitle: 'Chon hoat chat hop muc tieu va giai thich cach ket hop an toan',
    ribbon_text: 'Moi',
    purchasable: true,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=80' },
    ],
    description: '<p>Goi nay phu hop khi ban muon cai thien tham sau mun, da xi mau hoac can mot routine de deuy tri su deu mau va lang min hon.</p>',
    additional_info: [
      { id: 'routine-lam-sang-cach-lam', order: 1, title: 'Cach tiep can', description: '<p>Tap trung vao vitamin C, niacinamide, acid phu hop va kha nang dung nap thuc te cua tung lan da.</p>' },
    ],
    variants: [
      {
        id: 'routine-lam-sang-8-tuan',
        title: 'Lo trinh 8 tuan',
        price_in_cents: 5900000,
        sale_price_in_cents: 5200000,
        inventory_quantity: 8,
        manage_inventory: true,
      },
    ],
  },
  {
    id: 'phan-tich-bang-thanh-phan-my-pham',
    title: 'Phan tich bang thanh phan my pham',
    subtitle: 'Doc cong thuc, chi ra diem manh va nguy co khong phu hop voi da',
    ribbon_text: null,
    purchasable: true,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    images: [
      { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80' },
    ],
    description: '<p>Dich vu nay giup ban doc hieu thanh phan cua san pham duong da, tranh ket hop khong can thiet va uu tien lua chon co muc tieu ro rang.</p>',
    additional_info: [],
    variants: [
      {
        id: 'phan-tich-thanh-phan-3-san-pham',
        title: 'Danh gia toi da 3 san pham',
        price_in_cents: 2900000,
        sale_price_in_cents: null,
        inventory_quantity: 12,
        manage_inventory: true,
      },
    ],
  },
];

function formatMoney(amountInCents, currencyInfo = defaultCurrency) {
  const locale = currencyInfo?.locale || 'en-US';
  const currency = currencyInfo?.code || 'USD';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amountInCents / 100);
}

function mapVariant(variant) {
  const currency_info = variant.currency_info || defaultCurrency;

  return {
    ...variant,
    currency_info,
    price_formatted: formatMoney(variant.price_in_cents, currency_info),
    sale_price_formatted: variant.sale_price_in_cents !== null
      ? formatMoney(variant.sale_price_in_cents, currency_info)
      : formatMoney(variant.price_in_cents, currency_info),
  };
}

function mapProduct(product) {
  const variants = product.variants.map(mapVariant);

  return {
    ...product,
    variants,
  };
}

const products = rawProducts.map(mapProduct);

export function formatCurrency(amountInCents, currencyInfo) {
  return formatMoney(amountInCents, currencyInfo);
}

export async function getProducts(options = {}) {
  const { limit } = options;
  const limitedProducts = typeof limit === 'number' ? products.slice(0, limit) : products;

  return { products: limitedProducts };
}

export async function getProduct(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
}

export async function getProductQuantities({ product_ids = [] } = {}) {
  const variants = products
    .filter((product) => product_ids.length === 0 || product_ids.includes(product.id))
    .flatMap((product) =>
      product.variants.map((variant) => ({
        id: variant.id,
        inventory_quantity: variant.inventory_quantity,
      })),
    );

  return { variants };
}

export async function initializeCheckout({ successUrl, cancelUrl }) {
  return { url: successUrl || cancelUrl || '/' };
}
