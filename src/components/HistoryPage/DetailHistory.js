import React from "react";
import "./history.css";

const DetailHistory = () => {
  let data = {
    text: {
      title: "Lahirnya Sebuah Ide yang Menyegarkan",
      titlem1: "Sejarah Coca-Cola",
      titlem2: "Sejarah Yang Kaya",
    },
    images: {
      img1: "/images/founder.jpg",
      img2: "/images/founder2.jpg",
      img3: "/images/sejarahlast.jpg", 
    },
    deskripsi: {
      materi1:
        "Produk yang telah memberikan cita rasa paling terkenal di dunia ini lahir di Atlanta, Georgia, pada tanggal 8 Mei 1886. Dr. John Stith Pemberton, seorang apoteker setempat, memproduksi sirup untuk Coca-Cola, dan membawa sebotol produk baru tersebut ke Jacobs' Pharmacy...",
      materi2:
        "Karena mengira 'The Two Cs akan terlihat bagus dalam iklan,' mitra dan akuntan Dr. Pemberton, Frank M. Robinson, menyarankan nama tersebut dan menulis merek dagang 'Coca-Cola' dalam naskahnya yang unik.",
      materi3:
        "Dr. Pemberton tidak pernah menyadari potensi minuman yang diciptakannya. Ia secara bertahap menjual sebagian bisnisnya kepada berbagai mitra dan, tepat sebelum kematiannya pada tahun 1888, menjual sisa sahamnya di Coca-Cola kepada Asa G. Candler...",
      materi4:
        "Selama lebih dari 135 tahun, Perusahaan Coca-Cola telah menjadi bagian dari kehidupan masyarakat pada hari libur, acara khusus, dan acara sehari-hari. Dari merek dan iklan ikonik kami hingga inisiatif keberlanjutan kami di seluruh dunia, perusahaan Coca-Cola bertujuan untuk menyegarkan dunia sekaligus membuat perbedaan.",
    },
    nama: {
      founder1: "Dr. John Pemberton",
      founder2: "Asa G. Candler",
    },
  };

  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container">
        <h1 className="title-detail">{data.text.title}</h1>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded"
              src={data.images.img1}
              width="80%"
              alt="History Image"
            />
            <p className="founder-name">{data.nama.founder1}</p>
          </div>
          <div className="col-md-6">
            <h2 className="subtitle">{data.text.titlem1}</h2>
            <p className="text-description">{data.deskripsi.materi1}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-description">{data.deskripsi.materi2}</p>
            <p className="text-description">{data.deskripsi.materi3}</p>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded"
              src={data.images.img2}
              width="80%"
              alt="History Image"
            />
            <p className="founder-name">{data.nama.founder2}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded"
              src={data.images.img3}
              width="80%"
              alt="History Image"
            />
          </div>
          <div className="col-md-6">
            <h2 className="subtitle">{data.text.titlem2}</h2>
            <p className="text-description">{data.deskripsi.materi4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailHistory;
