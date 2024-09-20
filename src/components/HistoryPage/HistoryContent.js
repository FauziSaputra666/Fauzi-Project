import React from "react";
import "./history.css";

const HistoryContent = () => {
  let data = {
    text: {
      title: "Sejarah Coca Cola",
      deskripsi:
        "Pada tanggal 8 Mei 1886, Dr. John Pemberton membawa sirup hasil penyempurnaannya ke Jacobs' Pharmacy di pusat kota Atlanta, tempat gelas pertama Coca-Cola dituang. Menyajikan sekitar sembilan minuman per hari pada tahun pertamanya, Coca-Cola merupakan minuman baru yang menarik pada awalnya.",
    },
    images: {
      img1: "/images/sejarahpict.png",
    },
  };

  return (
    <section style={{ backgroundColor: "#fe001a", padding: "50px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid rounded"
              src={data.images.img1}
              width="80%"
              alt="Home Image"
            />
          </div>
          <div className="col-md-6">
            <h2 className="title">{data.text.title}</h2>
            <p className="text-deskripsi">{data.text.deskripsi}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryContent;
