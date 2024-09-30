import React from "react";
import "./about.css";
const DetailAbout = () => {
  let data = {
    materi: {
      title1: "Komitmen Keberlanjutan",
      title2: "Tujuan Kami",
    },
    image: {
      src1: "/images/komitmenpict.jpg",
      src2: "/images/tujuanpict.jpg",
    },
    deskripsi: {
      desk1:
        "Kami terus mengubah portofolio kami, dari mengurangi gula tambahan dalam minuman kami hingga menghadirkan produk-produk baru yang inovatif ke pasaran. Kami berupaya untuk memberikan dampak positif pada kehidupan masyarakat, komunitas, dan planet ini melalui pengisian ulang air, daur ulang kemasan, praktik pengadaan berkelanjutan, dan pengurangan emisi karbon di seluruh rantai nilai kami. Bersama dengan mitra pembotolan kami, kami mempekerjakan lebih dari 700.000 orang, membantu menghadirkan peluang ekonomi bagi masyarakat lokal di seluruh dunia.",
      desk2:
        "Kami berkomitmen untuk menawarkan lebih banyak minuman yang diinginkan orang dalam berbagai kategori dan ukuran sambil mendorong solusi berkelanjutan yang membangun ketahanan dalam bisnis kami dan menciptakan perubahan positif bagi planet ini. menciptakan merek dan pilihan minuman yang disukai orang, untuk menyegarkan jiwa dan raga mereka. Dan dilakukan dengan cara yang menciptakan bisnis yang lebih berkelanjutan dan masa depan bersama yang lebih baik yang membuat perbedaan dalam kehidupan masyarakat, komunitas, dan planet kita.",
    },
  };
  return (
    <section
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid text-center rounded"
              src={data.image.src1}
              alt="image"
              width="70%"
            ></img>
          </div>
          <div className="col-md-6">
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              {data.materi.title1}
            </h2>
            <p style={{ fontSize: "18px" }}>{data.deskripsi.desk1}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
              {data.materi.title2}
            </h2>
            <p style={{ fontSize: "18px" }}>{data.deskripsi.desk2}</p>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid text-center rounded"
              src={data.image.src2}
              alt="image"
              width="70%"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailAbout;
