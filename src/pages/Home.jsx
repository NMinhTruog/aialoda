import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProducts, getProductQuantities } from '@/api/EcommerceApi';
import SeoSchema from '@/components/SeoSchema';
import { buildOrganizationSchema, buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl, siteConfig } from '@/seo/siteConfig';

const Home = () => {
  const primaryButtonClass = 'rounded-full bg-[#3A0706] px-8 py-6 text-white hover:bg-[#5A1412]';
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getProducts({
          limit: 4
        });

        if (response.products.length > 0) {
          const productIds = response.products.map((product) => product.id);
          const quantitiesResponse = await getProductQuantities({
            fields: 'inventory_quantity',
            product_ids: productIds
          });

          const variantQuantityMap = new Map();
          quantitiesResponse.variants.forEach((variant) => variantQuantityMap.set(variant.id, variant.inventory_quantity));

          const productsWithQuantities = response.products.map((product) => ({
            ...product,
            variants: product.variants.map((variant) => ({
              ...variant,
              inventory_quantity: variantQuantityMap.get(variant.id) ?? variant.inventory_quantity
            }))
          }));

          setFeaturedProducts(productsWithQuantities);
        }
      } catch (err) {
        setError(err.message || 'Khong the tai noi dung noi bat.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleSeeDetails = useCallback((e, product) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`, {
      state: {
        featuredImage: product.image
      }
    });
  }, [navigate]);

  const homeTitle = 'Aloda | Tu van da va cham soc da theo huong khoa hoc';
  const homeDescription =
    'Aloda giup ban hieu tinh trang da, hoat chat dang dung va lo trinh cham soc da ro rang duoi dinh huong noi dung cua Bac si Anh.';

  return (
    <>
      <Helmet>
        <title>{homeTitle}</title>
        <meta name="description" content={homeDescription} />
        <meta name="keywords" content={siteConfig.keywords.join(', ')} />
        <link rel="canonical" href={getAbsoluteUrl('/')} />
      </Helmet>
      <SeoSchema
        schemas={[
          ...buildOrganizationSchema(),
          buildWebPageSchema({
            path: '/',
            title: homeTitle,
            description: homeDescription,
          }),
        ]}
      />

      <div className="bg-white">
        <section className="relative min-h-[85vh] flex items-center pt-16 lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6">AloDa chăm sóc da cùng bạn</h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg text-gray-600 mb-8 max-w-lg"
                >
                  Aloda bien website thanh mot nguon du lieu de con nguoi va AI deu co the doc hieu, doi chieu va tham khao khi can thong tin ve da va routine.
                </motion.p>
                <Link to="/shop">
                  <Button className={`${primaryButtonClass} text-base`}>
                    Kham pha giai phap
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img className="w-full h-64 object-cover rounded-2xl" alt="Can canh khong gian cham soc da va tu van" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/847762c9de2e98d5e74cb9671a97c5e6.png" />
                    <img className="w-full h-48 object-cover rounded-2xl" alt="Hinh anh minh hoa cho noi dung giai phap da lieu" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/72d0a0dd168792218977e06b8e6ab6ba.png" />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img className="w-full h-48 object-cover rounded-2xl" alt="Minh hoa cho luong thong tin va du lieu da lieu" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/c8f65dffbba17cd88fe9c26b8579ef97.png" />
                    <img className="w-full h-64 object-cover rounded-2xl" alt="Khong gian doi ngu dang xay dung noi dung cham soc da" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/f32be0a20771f1542b287fffb71de084.png" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">Noi dung noi bat</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cac goi tu van va dinh huong cham soc da dang duoc nguoi dung quan tam
              </p>
            </motion.div>

            {loading && (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-12 w-12 text-gray-900 animate-spin" />
              </div>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!loading && !error && (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {featuredProducts.map((product, index) => {
                  const displayVariant = product.variants[0];
                  const hasSale = displayVariant && displayVariant.sale_price_in_cents !== null;
                  const displayPrice = hasSale ? displayVariant.sale_price_formatted : displayVariant.price_formatted;

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={`/product/${product.id}`} state={{ featuredImage: product.image }} className="block">
                        <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-square">
                          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.title} src={product.image} />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:hidden">
                            <Button onClick={(e) => handleSeeDetails(e, product)} className="bg-white text-gray-900 hover:bg-white/90 rounded-full px-6 py-3 shadow-lg transform group-hover:scale-100 scale-90 transition-transform" aria-label="Xem chi tiet goi tu van">
                              Xem chi tiet
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-1 text-center">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {product.title}
                          </h3>
                          <p className="text-gray-900 font-medium">{displayPrice}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}

            <div className="text-center mt-12">
              <Link to="/shop">
                <Button className={primaryButtonClass}>
                  Xem tat ca giai phap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img className="w-full h-[500px] object-cover rounded-2xl" alt="Khong gian tu van va noi dung cham soc da" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/urban-vintage-bapixnpmwrm-unsplash-MdKpN.jpg" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-6">Duoc xay dung voi logic dieu tri</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Aloda khong chi liet ke san pham. Chung toi sap xep kien thuc, tinh huong da va huong dan su dung hoat chat thanh cau truc de ban de ra quyet dinh de hieu hon.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Phan noi dung chuyen mon duoc dinh huong boi Bac si Anh, giup lien ket thong tin giua doanh nghiep, chuyen gia, goi tu van va cac chu de cham soc da tren cung mot he thong.
                </p>
                <Link to="/about">
                  <Button className={primaryButtonClass}>
                    Tim hieu ve Aloda
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
