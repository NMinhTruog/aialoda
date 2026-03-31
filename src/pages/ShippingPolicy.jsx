import React from 'react';
import { Helmet } from 'react-helmet';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl } from '@/seo/siteConfig';

const ShippingPolicy = () => {
  const title = 'Chinh sach dat lich | Aloda';
  const description =
    'Thong tin ve thoi gian xac nhan, cach sap xep lich va quy trinh chuan bi truoc khi bat dau mot buoi tu van tai Aloda.';

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={getAbsoluteUrl('/shipping-policy')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/shipping-policy',
            title,
            description,
          }),
        ]}
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Chinh sach dat lich</h1>
      <section className="p-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thoi gian xac nhan</h2>
        <p className="text-lg text-gray-700 mb-6">
          Aloda co gang xac nhan moi yeu cau trong vong 1 den 3 ngay lam viec. Cac buoi tu van online se duoc sap xep theo lich trong khung thoi gian phu hop sau khi doi ngu lien he lai.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Chi phi va cach tinh</h2>
        <p className="text-lg text-gray-700 mb-6">
          Muc phi cua tung goi tu van duoc hien thi ngay tren trang chi tiet. Neu co noi dung theo doi mo rong hoac cap nhat them, doi ngu Aloda se thong bao ro truoc khi xac nhan.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hinh thuc thuc hien</h2>
        <p className="text-lg text-gray-700">
          Phan lon goi duoc trien khai qua hinh thuc online. Truoc buoi tu van, ban nen chuan bi routine dang dung, lich su phan ung va hinh anh tinh trang da neu can.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
