import React from "react";

const ProductContent = () => {
  let data = {
    text: {
      title: "Produk Kami",
    },
    imageso: {
      img1: "/images/original/original1.png",
      img2: "/images/original/original2.png",
    },
    imagesz: {
      img1: "/images/zero/zero1.png",
      img2: "/images/zero/zero2.png",
      img3: "/images/zero/zero3.png",
      img4: "/images/zero/zero4.png",
      img5: "/images/zero/zero5.png",
    },
    imagesf: {
      img1: "/images/flavors/flavor1.png",
      img2: "/images/flavors/flavor2.png",
      img3: "/images/flavors/flavor3.png",
      img4: "/images/flavors/flavor4.png",
      img5: "/images/flavors/flavor5.png",
      img6: "/images/flavors/flavor6.png",
    },
    imagesl: {
      img1: "/images/local/local1.png",
      img2: "/images/local/local2.png",
    },
    imagess: {
      img1: "/images/spiced/spiced1.png",
      img2: "/images/spiced/spiced2.png",
    },
    imagesc: {
      img1: "/images/creation/creation1.png",
      img2: "/images/creation/creation2.png",
      img3: "/images/creation/creation3.png",
      img4: "/images/creation/creation4.png",
      img5: "/images/creation/creation5.png",
      img6: "/images/creation/creation6.png",
      img7: "/images/creation/creation7.png",
      img8: "/images/creation/creation8.png",
      img9: "/images/creation/creation9.png",
      img10: "/images/creation/creation10.png",
      img11: "/images/creation/creation11.png",
      img12: "/images/creation/creation12.png",
      img13: "/images/creation/creation13.png",
      img14: "/images/creation/creation14.png",
      img15: "/images/creation/creation15.png",
      img16: "/images/creation/creation16.png",
    },
    titleo: {
      title1: "Coca Cola Original",
      title2: "Coca Cola Caffeine Free",
    },
    titlez: {
      title1: "Coca Cola Zero Sugar",
      title2: "Coca Cola Zero Caffeine Free",
      title3: "Coca Cola Cherry Vanilla Zero Sugar",
      title4: "Coca Cola Cherry Zero Sugar",
      title5: "Coca Cola Vanilla Zero Sugar",
    },
    titlef: {
      title1: "Coca Cola Cherry",
      title2: "Coca Cola Cherry Vanilla",
      title3: "Coca Cola Vanilla",
      title4: "Coca Cola Cherry Zero Sugar",
      title5: "Coca Cola Cherry Vanilla Zero Sugar",
      title6: "Coca Cola Vanilla Zero Sugar",
    },
    titlel: {
      title1: "Coca Cola Georgia Peach",
      title2: "Coca Cola California Raspberry",
    },
    titles: {
      title1: "Coca Cola Spiced",
      title2: "Coca Cola Spiced Zero Sugar",
    },
    titlec: {
      title1: "Coca Cola Zero Sugar OREO",
      title2: "Coca Cola K-Wave Zero Sugar",
      title3: "Coca Cola Happy Tears Zero Sugar",
      title4: "Coca Cola Y3000",
      title5: "Coca Cola Zero Sugar Y3000",
      title6: "Coca Cola Zero Sugar Ultimate",
      title7: "Coca Cola Ultimate",
      title8: "Coca Cola Zero Sugar Move",
      title9: "Coca Cola Move",
      title10: "Coca Cola Zero Sugar DreamWorld",
      title11: "Coca Cola DreamWorld",
      title12: "Marshmello's Coca Cola Zero Sugar",
      title13: "Marshmello's Coca Cola",
      title14: "Coca Cola Starlight Zero Sugar",
      title15: "Coca Cola Starlight",
      title16: "Coca Cola Zero Sugar Byte",
    },
  };
  return (
    <section>
      <div className="container">
        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Produk Kami</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imageso.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titleo.title1}</h5>
            <span className="badge text-bg-dark">Original</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imageso.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titleo.title2}</h5>
            <span className="badge text-bg-dark">Original</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesz.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titlez.title1}</h5>
            <span className="badge text-bg-secondary">Zero</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesz.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titlez.title2}</h5>
            <span className="badge text-bg-secondary">Zero</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesz.img3}
              alt="image"
              width="80%"
            />
            <h5>{data.titlez.title3}</h5>
            <span className="badge text-bg-secondary">Zero</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesz.img4}
              alt="image"
              width="80%"
            />
            <h5>{data.titlez.title4}</h5>
            <span className="badge text-bg-secondary">Zero</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesz.img5}
              alt="image"
              width="80%"
            />
            <h5>{data.titlez.title5}</h5>
            <span className="badge text-bg-secondary">Zero</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title1}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title2}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img3}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title3}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img4}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title4}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img5}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title5}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesf.img6}
              alt="image"
              width="80%"
            />
            <h5>{data.titlef.title6}</h5>
            <span className="badge text-bg-success">Flavors</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesl.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titlel.title1}</h5>
            <span className="badge text-bg-warning">Local</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesl.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titlel.title2}</h5>
            <span className="badge text-bg-warning">Local</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagess.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titles.title1}</h5>
            <span className="badge text-bg-danger">Spiced</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagess.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titles.title2}</h5>
            <span className="badge text-bg-danger">Spiced</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img1}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title1}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img2}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title2}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img3}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title3}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img4}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title4}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img5}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title5}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img6}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title6}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img7}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title7}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img8}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title8}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img9}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title9}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img10}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title10}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img11}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title11}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img12}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title12}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img13}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title13}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img14}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title14}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img15}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title15}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="img-fluid produk-img"
              src={data.imagesc.img16}
              alt="image"
              width="80%"
            />
            <h5>{data.titlec.title16}</h5>
            <span className="badge text-bg-primary">Limited Edition</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductContent;
