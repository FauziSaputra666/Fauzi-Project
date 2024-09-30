import React from "react";
import "./about.css";

const VisiMisi = () => {
  let data = {
    text: {
      title: "Visi dan Misi",
    },
    images: {
      visi: "/images/visi.jpg",
      misi: "/images/misi.jpg",
    },
    visi: {
      title: "Visi",
      deskripsi:
        "Menjadi perusahaan minuman terdepan di dunia, yang menginspirasi kebahagiaan, menyegarkan dunia, serta memberikan dampak positif yang berkelanjutan bagi masyarakat dan lingkungan. Kami berkomitmen untuk berinovasi, menawarkan produk berkualitas, serta menciptakan momen kebahagiaan di setiap tegukan bagi konsumen di seluruh penjuru dunia.",
    },
    misi: {
      title: "Misi",
      deskripsi:
        "Untuk diakui sebagai tempat kerja utama, menciptakan minuman kelas dunia, dan memberikan kontribusi positif terhadap bisnis dan pasar tempat kami beroperasi. Menciptakan perusahaan minuman yang lengkap, inovatif, dan berkelanjutan. Menciptakan minuman yang diinginkan, dan menciptakan peluang ekonomi yang lebih berkelanjutan dan masa depan.",
    },
  };

  return (
    <section
      style={{
        backgroundColor: "#A52A2A",
        padding: "50px 0",
        marginTop: "30px",
      }}
    >
      <div className="container">
        <h1 className="title-about">{data.text.title}</h1>
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
            className="img-fluid text-center rounded"
              src={data.images.visi}
              alt="images"
              width="70%"
            ></img>
          </div>
          <div className="col-md-6">
            <h2 style={{ color: "white", fontWeight: "bold" }}>
              {data.visi.title}
            </h2>
            <p style={{ color: "white", fontSize: "18px" }}>
              {data.visi.deskripsi}
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ color: "white", fontWeight: "bold" }}>
              {data.misi.title}
            </h2>
            <p style={{ color: "white", fontSize: "18px" }}>
              {data.misi.deskripsi}
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
            className="img-fluid text-center rounded"
              src={data.images.misi}
              alt="image"
              width="70%"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
