import React from "react";
import "./contact.css";

const Contact = () => {

  let data = {
    text: {
      title: "Hubungi Kami",
      subtitle:
        "Kami tidak dapat menyelesaikan masalah Anda jika Anda tidak memberi tahu kami!",
      title2: "Coca Cola Indonesia",
    },
    icon: {
      twitter: "/images/iconx.jpg",
      facebook: "/images/iconfb.jpg",
      instagram: "/images/iconig.jpg",
      youtube: "/images/iconyt.jpg",
      whatsapp: "/images/iconwa.jpg",
    },
    namasos: {
      twitter: "@CocaCola_ID",
      instagram: "cocacola_id",
      youtube: "@Coca-Cola",
      facebook: "Coca-Cola",
      telephone: "0800 100 2653",
      email: "info@coca-cola.co.id",
    },
    link: {
      twitter: "https://x.com/CocaCola_ID",
      instagram: "https://www.instagram.com/cocacola_id",
      youtube: "https://www.youtube.com/user/cocacola",
      facebook: "https://www.facebook.com/Coca-Cola/",
      whatsapp: "https://wa.me/0318285737",
    },
  };

  return (
    <section>
      <div className="container">
        <div className="row align-item-center">
          <div className="col-md-6">
            <h2>{data.text.title}</h2>
            <p>{data.text.subtitle}</p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="validationDefault01"
                  placeholder="Pesan"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
          <div className="col-md-6 contact-info">
            <ul>
              <li style={{ fontWeight: "bold", fontSize: "30px" }}>
                {data.text.title2}
              </li>
              <li style={{ fontWeight: "bold" }}>
                Telephone:&nbsp;{data.namasos.telephone}
              </li>
              <li style={{ fontWeight: "bold" }}>
                Email address:&nbsp;
                <a
                  href="mailto:info@coca-cola.co.id"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  {data.namasos.email}
                </a>
              </li>
              <li>
                <div className="social-icons">
                  <a href={data.link.whatsapp} target="_blank">
                    <img src={data.icon.whatsapp} alt="WhatsApp" />
                  </a>
                  <a href={data.link.facebook} target="_blank">
                    <img src={data.icon.facebook} alt="Facebook" />
                  </a>
                  <a href={data.link.instagram} target="_blank">
                    <img src={data.icon.instagram} alt="Instagram" />
                  </a>
                  <a href={data.link.twitter} target="_blank">
                    <img src={data.icon.twitter} alt="Twitter" />
                  </a>
                  <a href={data.link.youtube} target="_blank">
                    <img src={data.icon.youtube} alt="YouTube" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
