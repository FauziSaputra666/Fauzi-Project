import React from "react";
import "./home.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Faq = (args) => {
  const [modalIndex, setModalIndex] = React.useState(null);

  const toggle = (index) => {
    if (modalIndex === index) {
      setModalIndex(null);
    } else {
      setModalIndex(index);
    }
  };

  let data = {
    text: {
      title: "Tanya Jawab",
      tombol: "Close",
      ttlqna: "Paling Umum",
    },
    pertanyaan: {
      first: "Apakah Coca Cola mengandung alkohol",
      second: "Apakah Coca Cola aman untuk anak-anak",
      third: "Apakah Coca Cola ramah lingkungan",
      fourth: "Apakah Coca Cola mengandung kafein",
      fifth: "Apakah Coca Cola bebas dari gula?",
      sixth: "Apakah Coca Cola memiliki kandungan kalori",
      seventh: "Bagaimana Coca Cola mengelola limbah produksinya",
      eighth: "Apakah ada batasan usia untuk mengonsumsi Coca Cola",
      ninth: "Apakah Coca Cola mengandung pewarna buatan",
      tenth: "Bagaimana Coca Cola mempromosikan keberlanjutan",
    },
    jawaban: {
      pertama:
        "Tidak. Bahan dasar dan proses produksi kami diatur secara ketat oleh pemerintah dan otoritas kesehatan di lebih dari 200 negara. Semua institusi tersebut telah secara konsisten mengakui Coca‑Cola sebagai produk non-alkohol.",
      kedua:
        "Ya, Coca-Cola aman dikonsumsi oleh anak-anak dalam jumlah yang wajar, tetapi disarankan untuk membatasi konsumsi gula.",
      ketiga:
        "Coca-Cola berkomitmen untuk ramah lingkungan dengan berbagai inisiatif daur ulang dan pengurangan emisi karbon.",
      keempat:
        "Beberapa varian Coca-Cola mengandung kafein, tetapi ada juga varian bebas kafein.",
      kelima:
        "Coca-Cola memiliki varian bebas gula, seperti Coca-Cola Zero Sugar.",
      keenam:
        "Coca-Cola mengandung kalori, terutama dari gula, kecuali pada varian rendah kalori seperti Coca-Cola Zero Sugar.",
      ketujuh:
        "Coca-Cola menerapkan proses daur ulang dan pengolahan limbah yang ramah lingkungan dalam operasinya.",
      kedelapan:
        "Tidak ada batasan usia yang spesifik, namun anak-anak disarankan untuk membatasi konsumsi minuman bergula.",
      kesembilan:
        "Coca-Cola mengandung pewarna buatan yang telah disetujui oleh badan kesehatan.",
      kesepuluh:
        "Coca-Cola mempromosikan keberlanjutan melalui pengurangan plastik dan penggunaan botol daur ulang.",
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
        <h1 className="faq-title">{data.text.title}</h1>
        <div className="row align-items-center">
          <div className="col-md-5">
            <img className="img-fluid" src="/images/faq.png" alt="FAQ" />
          </div>
          <div className="col-md-7">
            <h4
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {data.text.ttlqna}
            </h4>
            {/* Pertanyaan kesiji */}
            <p className="faq-p">
              <a onClick={() => toggle(1)}>1. {data.pertanyaan.first}?</a>
            </p>
            <Modal isOpen={modalIndex === 1} toggle={() => toggle(1)} {...args}>
              <ModalHeader toggle={() => toggle(1)}>
                {data.pertanyaan.first}?
              </ModalHeader>
              <ModalBody>{data.jawaban.pertama}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(1)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan keloro */}
            <p className="faq-p">
              <a onClick={() => toggle(2)}>2. {data.pertanyaan.second}?</a>
            </p>
            <Modal isOpen={modalIndex === 2} toggle={() => toggle(2)} {...args}>
              <ModalHeader toggle={() => toggle(2)}>
                {data.pertanyaan.second}?
              </ModalHeader>
              <ModalBody>{data.jawaban.kedua}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(2)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan ketelu */}
            <p className="faq-p">
              <a onClick={() => toggle(3)}>3. {data.pertanyaan.third}?</a>
            </p>
            <Modal isOpen={modalIndex === 3} toggle={() => toggle(3)} {...args}>
              <ModalHeader toggle={() => toggle(3)}>
                {data.pertanyaan.third}?
              </ModalHeader>
              <ModalBody>{data.jawaban.ketiga}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(3)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kepapat */}
            <p className="faq-p">
              <a onClick={() => toggle(4)}>4. {data.pertanyaan.fourth}?</a>
            </p>
            <Modal isOpen={modalIndex === 4} toggle={() => toggle(4)} {...args}>
              <ModalHeader toggle={() => toggle(4)}>
                {data.pertanyaan.fourth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.keempat}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(4)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kelimo */}
            <p className="faq-p">
              <a onClick={() => toggle(5)}>5. {data.pertanyaan.fifth}?</a>
            </p>
            <Modal isOpen={modalIndex === 5} toggle={() => toggle(5)} {...args}>
              <ModalHeader toggle={() => toggle(5)}>
                {data.pertanyaan.fifth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.kelima}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(5)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan keenem */}
            <p className="faq-p">
              <a onClick={() => toggle(6)}>6. {data.pertanyaan.sixth}?</a>
            </p>
            <Modal isOpen={modalIndex === 6} toggle={() => toggle(6)} {...args}>
              <ModalHeader toggle={() => toggle(6)}>
                {data.pertanyaan.sixth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.keenam}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(6)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kepitu */}
            <p className="faq-p">
              <a onClick={() => toggle(7)}>7. {data.pertanyaan.seventh}?</a>
            </p>
            <Modal isOpen={modalIndex === 7} toggle={() => toggle(7)} {...args}>
              <ModalHeader toggle={() => toggle(7)}>
                {data.pertanyaan.seventh}?
              </ModalHeader>
              <ModalBody>{data.jawaban.ketujuh}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(7)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kewolu */}
            <p className="faq-p">
              <a onClick={() => toggle(8)}>8. {data.pertanyaan.eighth}?</a>
            </p>
            <Modal isOpen={modalIndex === 8} toggle={() => toggle(8)} {...args}>
              <ModalHeader toggle={() => toggle(8)}>
                {data.pertanyaan.eighth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.kedelapan}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(8)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kesongo */}
            <p className="faq-p">
              <a onClick={() => toggle(9)}>9. {data.pertanyaan.ninth}?</a>
            </p>
            <Modal isOpen={modalIndex === 9} toggle={() => toggle(9)} {...args}>
              <ModalHeader toggle={() => toggle(9)}>
                {data.pertanyaan.ninth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.kesembilan}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(9)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>

            {/* Pertanyaan kesepuluh */}
            <p className="faq-p">
              <a onClick={() => toggle(10)}>10. {data.pertanyaan.tenth}?</a>
            </p>
            <Modal
              isOpen={modalIndex === 10}
              toggle={() => toggle(10)}
              {...args}
            >
              <ModalHeader toggle={() => toggle(10)}>
                {data.pertanyaan.tenth}?
              </ModalHeader>
              <ModalBody>{data.jawaban.kesepuluh}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => toggle(10)}>
                  {data.text.tombol}
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
