// ContactLinks.jsx

import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import instapay from "../../assets/instapay.png"; // استبدل هذا بمسار الصورة الصحيح
import map from "../../assets/map.png"; // استبدل هذا بمسار الصورة الصحيح
import { SiVodafone } from 'react-icons/si'; // بديل رمزي لفودافون كاش

import './ContactLinks.css';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <a
        href="https://www.facebook.com/Baya3storeBS/?locale=ar_AR"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon facebook"
        title="Facebook"
      >
        <FaFacebook />
      </a>

      <a
        href="https://wa.me/201001086899"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://wa.me/201004333323"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp2"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* <a
        href="https://instapay.eg"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon instapay"
        title="Instapay"
      >
        <img src={instapay} alt="instpay" />
      </a> */}

      <a
        href="tel:01068054888"
        className="contact-icon vodafone"
        title="Vodafone Cash"
      >
        <SiVodafone />
      </a>
      <a
        href="https://www.google.com/maps/dir//%D8%AC%D9%8A%D9%87%D8%A7%D9%86+%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA%D8%8C+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9%D8%8C+%D8%A7%D9%88%D9%84+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D9%88%D8%B1%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AF%D9%82%D9%87%D9%84%D9%8A%D8%A9+7650160%E2%80%AD/@31.0474937,31.4327301,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x14f79dd84260d2d3:0x435a726a96610bf2!2m2!1d31.3626899!2d31.0389822?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
        className="contact-icon map"
        title="location"
      >
        <img src={map} alt="map" />
      </a>
    </div>
  );
};

export default ContactLinks;
