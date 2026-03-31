import React from 'react';
import { Helmet } from 'react-helmet';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl } from '@/seo/siteConfig';

const ReturnsPolicy = () => {
  const title = 'Chinh sach hoan huy | Aloda';
  const description =
    'Thong tin ve dieu kien hoan huy, cach thong bao va quy trinh xu ly doi voi cac goi tu van tai Aloda.';

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={getAbsoluteUrl('/returns-policy')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/returns-policy',
            title,
            description,
          }),
        ]}
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Chinh sach hoan huy</h1>
      <section className="p-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dieu kien ap dung</h2>
        <p className="text-lg text-gray-700 mb-6">
          Ban co the yeu cau doi lich hoac huy lich neu thong bao som theo thoi gian duoc Aloda xac nhan. Moi tinh huong se duoc xem xet dua tren muc do chuan bi cua buoi tu van.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cach thong bao</h2>
        <p className="text-lg text-gray-700 mb-6">
          De doi lich hoac huy, vui long lien he doi ngu ho tro cua Aloda kem theo thong tin dat lich. Chung toi se phan hoi huong xu ly phu hop trong thoi gian som nhat.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hoan phi</h2>
        <p className="text-lg text-gray-700">
          Neu yeu cau hoan huy du dieu kien, Aloda se thong bao cach xu ly va thoi gian hoan phi cu the. Cac truong hop da bat dau tu van hoac da gui tai lieu chuyen mon co the ap dung dieu kien rieng.
        </p>
      </section>
    </div>
  );
};

export default ReturnsPolicy;
