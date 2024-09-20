import React from "react";
import "./home.css";

const Produk = () => {
  let data = {
    title: {
      produk: "Produk Terlaris",
      kesatu: "Coca Cola Original",
      kedua: "Coca Cola Zero Sugar",
      ketiga: "Coca Cola Botol 400 ml",
      keempat: "Coca Cola Botol 1 lt",
    },
    image: {
      foto1: "/images/produkpict (1).png",
      foto2: "/images/produkpict (2).png",
      foto3: "/images/produkpict (3).png",
      foto4: "/images/produkpict (4).png",
    },
    deskripsi: {
      kesatu:
        "Coca-Cola Original menawarkan rasa manis yang khas dan menyegarkan dengan perpaduan sempurna antara karamel dan aroma citrus.",
      kedua:
        "Coca-Cola Zero Sugar menghadirkan rasa yang mirip dengan varian original namun tanpa kandungan gula, cocok bagi yang ingin menikmati tanpa khawatir kalori.",
      ketiga:
        "Coca-Cola Botol 400 ml cocok untuk minuman hangat dan segar. Cocok untuk minuman hangat dan segar.",
      keempat:
        "Coca-Cola Botol 1 lt cocok untuk minuman hangat dan segar. Cocok untuk minuman hangat dan segar.",
    },
  };

  return (
    <section
      style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}
    >
      <div className="container">
          <h2 className="title-produk">{data.title.produk}</h2>
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                className="img-fluid produk-img"
                src={data.image.foto1}
                alt="Coca Cola Original"
                style={{ width: "50%" }}
              />
              <h3 className="produk-title">{data.title.kesatu}</h3>
              <p className="produk-deskripsi">{data.deskripsi.kesatu}</p>
            </div>
            <div className="col-md-6 order-md-2 text-center">
              <img
                className="img-fluid produk-img"
                src={data.image.foto2}
                alt="Coca Cola Zero Sugar"
                style={{ width: "47%" }}
              />
              <h3 className="produk-title">{data.title.kedua}</h3>
              <p className="produk-deskripsi">{data.deskripsi.kedua}</p>
            </div>
            <div className="col-md-6 order-md-2 text-center">
              <img
                className="img-fluid produk-img"
                src={data.image.foto3}
                alt="Coca Cola Bottle"
                style={{ width: "47%" }}
              />
              <h3 className="produk-title">{data.title.ketiga}</h3>
              <p className="produk-deskripsi">{data.deskripsi.ketiga}</p>
            </div>
            <div className="col-md-6 order-md-2 text-center">
              <img
                className="img-fluid produk-img"
                src={data.image.foto4}
                alt="Coca Cola Bottle"
                style={{ width: "47%" }}
              />
              <h3 className="produk-title">{data.title.keempat}</h3>
              <p className="produk-deskripsi">{data.deskripsi.keempat}</p>
            </div>
          </div>
      
      </div>
    </section>
  );
};

export default Produk;
