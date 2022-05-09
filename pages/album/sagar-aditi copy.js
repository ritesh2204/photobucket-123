import Head from "next/head";
import AlbumTitle from "../../components/AlbumTitle";
import ImageContainer from "../../components/ImageContainer";

export default function Albums() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - Albums</title>
      </Head>
      <main className="ms-container">
        <AlbumTitle />
        <div className="ms-section__block">
          <div className="row">
            <ImageContainer
              images={[
                "/images/portfolio/sagarAditi/sa1.JPG",
                "/images/portfolio/sagarAditi/sa2.JPG",
                "/images/portfolio/sagarAditi/sa22.JPG",
                "/images/portfolio/sagarAditi/sa3.JPG",
                "/images/portfolio/sagarAditi/sa10.JPG",
                "/images/portfolio/sagarAditi/sa11.JPG",
                "/images/portfolio/sagarAditi/sa16.JPG",
                "/images/portfolio/sagarAditi/sa17.JPG",
                "/images/portfolio/sagarAditi/sa22.JPG",
                "/images/portfolio/sagarAditi/sa23.JPG",
                "/images/portfolio/sagarAditi/sa8.JPG",
                "/images/portfolio/sagarAditi/sa4.JPG",
                "/images/portfolio/sagarAditi/sa5.JPG",
                "/images/portfolio/sagarAditi/sa12.JPG",
                "/images/portfolio/sagarAditi/sa13.JPG",
                "/images/portfolio/sagarAditi/sa18.JPG",
                "/images/portfolio/sagarAditi/sa19.JPG",
                "/images/portfolio/sagarAditi/sa6.JPG",
                "/images/portfolio/sagarAditi/sa7.JPG",
                "/images/portfolio/sagarAditi/sa8.JPG",
                "/images/portfolio/sagarAditi/sa9.JPG",
                "/images/portfolio/sagarAditi/sa14.JPG",
                "/images/portfolio/sagarAditi/sa15.JPG",
                "/images/portfolio/sagarAditi/sa20.JPG",
                "/images/portfolio/sagarAditi/sa21.JPG",
                "/images/portfolio/sagarAditi/sa24.JPG",
                "/images/portfolio/sagarAditi/sa23.JPG",

                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176098/Sagar%20X%20Aditi/0P3A4894_r4xznw.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/0P3A4488_knxgt0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/DJI_0062_d2ognt.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/0P3A4360_t105bm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/BBST7915_vutzxy.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/BBST7924_uljqd8.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/BBST8282_iwg2ps.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/BBST7887_s8pbno.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/BBST7896_qkvs8u.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/0P3A7605-2_vrlrxe.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/0P3A7679_ccsogm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176097/Sagar%20X%20Aditi/0P3A7648_wdo5sf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A7637_oochvl.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6968_w4b07e.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6986_aas6mf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6412_qtb8gf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6986_aas6mf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6412_qtb8gf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6954_rzcl3g.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A5919_bbxmxc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176096/Sagar%20X%20Aditi/0P3A6858_yojuez.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176095/Sagar%20X%20Aditi/0P3A5678_k8y8vi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176095/Sagar%20X%20Aditi/0P3A5874_ewgypq.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176095/Sagar%20X%20Aditi/0P3A5910_bgke0j.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176095/Sagar%20X%20Aditi/0P3A6223_vuypn4.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633176095/Sagar%20X%20Aditi/0P3A5051_qcxoir.jpg",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
