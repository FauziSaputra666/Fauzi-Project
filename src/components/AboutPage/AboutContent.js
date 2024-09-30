import React from "react";
import "./about.css";

const AboutContent = () => {
  let data = {
    text: {
      title: "Tentang Kami",
      deskripsi:
        "Pada tanggal 8 Mei 1886, Dr. John Pemberton membawa sirup hasil penyempurnaannya ke Jacobs' Pharmacy di pusat kota Atlanta, tempat gelas pertama Coca-Cola dituang. Dari satu minuman ikonik itu, kami telah berkembang menjadi perusahaan minuman yang lengkap. Lebih dari 2,2 miliar sajian minuman kami dinikmati di lebih dari 200 negara dan wilayah setiap harinya.",
    },
    image: {
      foto: "/images/aboutpict.png",
    },
  };

  return (
    <section
      style={{
        backgroundColor: "#A52A2A",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h2 className="title">{data.text.title}</h2>
            <p className="text-center" style={{color: "white"}}>{data.text.deskripsi}</p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid bounce"
              src={data.image.foto}
              alt="logo"
              width="80%"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
