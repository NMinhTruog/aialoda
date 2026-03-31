import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl } from '@/seo/siteConfig';

const Shop = () => {
  const title = 'Giai phap cham soc da | Aloda';
  const description =
    'Tong hop cac goi tu van da mun, phuc hoi da nhay cam, routine lam sang va phan tich bang thanh phan my pham tai Aloda.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={getAbsoluteUrl('/shop')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/shop',
            title,
            description,
            type: 'CollectionPage',
          }),
        ]}
      />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-light tracking-tight text-gray-900 mb-4">Giai phap cham soc da</h1>
            <p className="text-lg text-gray-600">
              Lua chon goi tu van va noi dung phu hop muc tieu da cua ban
            </p>
          </motion.div>

          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default Shop;
