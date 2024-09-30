import React from "react";

let data = {
  text: {
    title: "Keberlanjutan",
    deskripsi:
      "Sebagai perusahaan minuman yang menyeluruh, kami didorong oleh tujuan untuk menyegarkan dunia dan membuat perbedaan. Kami mengembangkan bisnis kami dengan cara yang mendorong perubahan positif dan bertujuan untuk membangun masa depan yang lebih berkelanjutan bagi planet kita.",
  },
  images: {
    img1: "/images/keberlanjutan1.jpg",
    img2: "/images/keberlanjutan2.jpeg",
    img3: "/images/keberlanjutan3.jpg",
  },
  deskripsi: {
    title1: "Berfokus pada Dunia tanpa sampah",
    deskripsi1:
      "Kami bermaksud mengumpulkan dan mendaur ulang satu botol atau kaleng untuk setiap botol atau kaleng yang kami jual dan membuat 100% kemasan kami dapat didaur ulang.",
    title2: "Memprioritaskan pengisian ulang air",
    deskripsi2:
      "Prakarsa pengelolaan air kami ditujukan untuk meningkatkan keamanan air di tempat kami beroperasi, mendapatkan bahan baku, dan menyentuh kehidupan masyarakat. Sejak 2015, kami mengembalikan 100% air yang digunakan dalam minuman jadi kami secara global kepada alam dan masyarakat.",
    title3: "Mengurangi jejak karbon kita",
    deskripsi3:
      "Kami menetapkan target untuk mengurangi emisi karbon sebesar 25% pada tahun 2030 dari tahun dasar 2015.",
  },
};

const Sustainability = () => {
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "30px" }}>
          {data.text.title}
        </h1>
        <p style={{ textAlign: "center", marginBottom: "50px" }}>{data.text.deskripsi}</p>
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={data.images.img1}
              alt="keberlanjutan"
            />
            <h3>{data.deskripsi.title1}</h3>
            <p>{data.deskripsi.deskripsi1}</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={data.images.img2}
              alt="keberlanjutan"
            />
            <h3>{data.deskripsi.title2}</h3>
            <p>{data.deskripsi.deskripsi2}</p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={data.images.img3}
              alt="keberlanjutan"
            />
            <h3>{data.deskripsi.title3}</h3>
            <p>{data.deskripsi.deskripsi3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;