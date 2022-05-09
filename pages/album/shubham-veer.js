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
        {/* <!-- Page Title --> */}
        <AlbumTitle />
        <div className="ms-section__block"></div>
        <div className="row">
          <ImageContainer
            images={[
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176139/Shubham%20X%20Meer/DSC_5673_rj2ljp.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176139/Shubham%20X%20Meer/DSC_5626_bx1v9i.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176139/Shubham%20X%20Meer/DSC_5545_gbrzes.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_6665_d6gwha.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_6620_rfqzbz.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_6646_iwznzx.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_6524_nssnw1.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5941_rdkuqj.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5889_oe2uiq.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5888_juol58.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5747_vd8xgh.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5868_gsocxr.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5866_sdlvpt.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176138/Shubham%20X%20Meer/DSC_5876_uo7dae.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5745_zjrdrj.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5862_uhb2ev.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5735_zl6twi.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5742_qcwckt.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633176137/Shubham%20X%20Meer/DSC_5676_arifpm.jpg",
            ]}
          />
        </div>
      </main>
    </>
  );
}
