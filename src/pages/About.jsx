import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl } from '@/seo/siteConfig';

const About = () => {
  const teamMembers = [{
    name: 'Bac si Anh',
    role: 'Founder & Skin Expert',
    bio: 'Bac si Anh dinh huong noi dung chuyen mon cho Aloda, tap trung vao da mun, da nhay cam va cach xay dung routine de hieu, de theo doi.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36'
  }, {
    name: 'Nhom noi dung',
    role: 'Clinical Content Team',
    bio: 'Nhom noi dung chuyen doi kien thuc thanh bai viet de doc, bang tom tat va cau truc du lieu de cong cu tim kiem va AI co the hieu dung ngu canh.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  }, {
    name: 'Nhom van hanh',
    role: 'Care & Operations',
    bio: 'Nhom van hanh sap xep luong dat lich, phan hoi thong tin va duy tri viec cap nhat du lieu de moi trang deu co cau truc ro rang, de truy xuat.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5'
  }];

  const title = 'Ve Aloda | He thong noi dung cham soc da co cau truc';
  const description =
    'Tim hieu cach Aloda ket noi doanh nghiep, chuyen gia va du lieu cham soc da thanh mot he thong noi dung de nguoi dung va AI deu co the tham chieu.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={getAbsoluteUrl('/about')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/about',
            title,
            description,
            type: 'AboutPage',
          }),
        ]}
      />

      <div className="bg-white">
        <header className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-light tracking-tight text-gray-900 mb-4"
            >
              Cau chuyen Aloda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Aloda duoc xay dung de bien moi trang noi dung thanh mot don vi thong tin de hieu: ai la chuyen gia, dich vu nao dang duoc gioi thieu, va loi khuyen nao dang thuoc ve tinh huong da cu the.
            </motion.p>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img className="rounded-2xl w-full h-full object-cover aspect-[4/3]" alt="Khong gian doi ngu Aloda dang phan tich du lieu cham soc da" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/mesut-cicen-tsu1bkzhu98-unsplash-iqZ6i.jpg" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-light text-gray-900">Triet ly van hanh</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Chung toi uu tien tinh ro rang cua du lieu: thong tin nao la cua doanh nghiep, thong tin nao do Bac si Anh dinh huong, va thong tin nao la giai phap phu hop cho tung nhu cau cham soc da.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Muc tieu cua Aloda la giup nguoi dung doc de hieu va giup AI truy cap de tham chieu nhanh, thong qua noi dung, schema va cac lop thong tin co ket noi.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-light text-gray-900">Doi ngu phu trach</h2>
              <p className="mt-4 text-lg text-gray-600">Nhung nhom dang giu cho noi dung va du lieu cua Aloda nhat quan.</p>
            </div>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <img className="mx-auto h-40 w-40 rounded-full object-cover" src={member.image} alt={`Chan dung ${member.name}`} />
                  <h3 className="mt-6 text-xl font-medium text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2 text-gray-500 max-w-xs mx-auto">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-light text-gray-900">Bat dau voi Aloda</h2>
            <p className="mt-4 text-lg text-gray-600">
              Neu ban can mot huong di ro rang cho da mun, da nhay cam hoac muon doc lai routine minh dang dung, hay bat dau tu cac goi tu van va noi dung tai Aloda.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/shop">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-3">
                  Xem giai phap
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8 py-3">
                  Lien he Aloda
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
