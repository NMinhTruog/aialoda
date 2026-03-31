import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl } from '@/seo/siteConfig';

const Success = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const closeModalAndRedirect = () => {
    setIsModalOpen(false);
    navigate('/shop');
  };

  return (
    <>
      <Helmet>
        <title>Dat lich thanh cong | Aloda</title>
        <meta name="description" content="Cam on ban da gui yeu cau tai Aloda. He thong da ghi nhan thong tin va doi ngu se xac nhan trong thoi gian som." />
        <link rel="canonical" href={getAbsoluteUrl('/success')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/success',
            title: 'Dat lich thanh cong | Aloda',
            description: 'Trang xac nhan yeu cau sau khi nguoi dung hoan tat buoc thanh toan hoac dat lich tai Aloda.',
          }),
        ]}
      />

      <div className="bg-gray-100 min-h-[70vh] flex items-center justify-center p-4">
        <p className="text-gray-500">He thong dang chuyen ban ve danh sach giai phap...</p>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={closeModalAndRedirect}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full text-center p-8 sm:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button onClick={closeModalAndRedirect} variant="ghost" size="icon" className="absolute top-4 right-4 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full">
                <X size={24} />
              </Button>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-4"
              >
                Yeu cau cua ban da duoc ghi nhan
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-600 mb-8"
              >
                Aloda da nhan thong tin dat lich. Doi ngu se lien he lai de xac nhan noi dung, thoi gian va cac buoc chuan bi can thiet.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button onClick={closeModalAndRedirect} className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-6 text-base w-full sm:w-auto">
                  Tiep tuc xem giai phap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Success;
