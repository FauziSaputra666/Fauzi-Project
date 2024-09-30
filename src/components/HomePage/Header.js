import React from "react";
import "./home.css";

const Header = () => {
  let data = {
    text: {
      title: "Nikmati Sekarang",
      description:
        "Coca-Cola adalah minuman ringan berkarbonasi yang diperkenalkan pada 1886 oleh John Stith Pemberton. Diproduksi oleh The Coca-Cola Company, Coca-Cola telah menjadi merek ikonik global yang dikenal karena rasa khasnya yang menyegarkan. Tersedia di lebih dari 200 negara, Coca-Cola melambangkan kebersamaan dan kenikmatan hidup.",
      tombol: "Learn More",
    },
    image: {
      src: "/images/homepict.png",
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
            <img
              className="img-fluid bounce"
              src={data.image.src}
              width="80%"
              alt="Home Image"
            />
          </div>
          <div className="col-md-6">
            <h2 className="title">{data.text.title}</h2>
            <p className="text-center" style={{ color: "white" }}>{data.text.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
