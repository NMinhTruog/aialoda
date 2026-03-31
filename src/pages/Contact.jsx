import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SeoSchema from '@/components/SeoSchema';
import { buildWebPageSchema } from '@/seo/schema';
import { getAbsoluteUrl, siteConfig } from '@/seo/siteConfig';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Form lien he chua duoc ket noi',
      description: 'Ban co the yeu cau minh bo sung luong gui form o buoc tiep theo.',
    });
  };

  const contactInfo = [{
    icon: Mail,
    title: 'Email',
    content: siteConfig.contactEmail,
    link: `mailto:${siteConfig.contactEmail}`
  }, {
    icon: Phone,
    title: 'Phone',
    content: siteConfig.contactPhone,
    link: 'tel:19000000'
  }, {
    icon: MapPin,
    title: 'Location',
    content: 'Ho Chi Minh City, Viet Nam',
    link: '#'
  }];

  const title = 'Lien he Aloda | Tu van da va thong tin van hanh';
  const description =
    'Lien he Aloda de nhan huong dan ve goi tu van da, thong tin dat lich, noi dung cham soc da va cac cau hoi lien quan den Bac si Anh.';

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={getAbsoluteUrl('/contact')} />
      </Helmet>
      <SeoSchema
        schemas={[
          buildWebPageSchema({
            path: '/contact',
            title,
            description,
            type: 'ContactPage',
          }),
        ]}
      />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">Lien he voi Aloda</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gui cau hoi ve da, routine, goi tu van hoac cach Aloda cau truc noi dung de AI co the truy xuat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white mb-4">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-center">{info.content}</p>
              </motion.a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="hidden">
            <input name="name" value={formData.name} onChange={handleChange} />
            <input name="email" value={formData.email} onChange={handleChange} />
            <input name="subject" value={formData.subject} onChange={handleChange} />
            <textarea name="message" value={formData.message} onChange={handleChange} />
          </form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-2"
          >
            <img className="w-full h-[600px] object-cover rounded-2xl" alt="Khong gian tiep nhan thong tin va tu van cua Aloda" src="https://horizons-cdn.hostinger.com/effc8396-39b6-4d3d-b04a-26d56911f8ab/polina-kuzovkova-abevonowqtg-unsplash-2QDVr.jpg" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
