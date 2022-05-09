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
        <div className="ms-section__block">
          <div className="row">
            <ImageContainer
              images={[
                "/images/portfolio/abhishekVasavi/av1.JPG",
                "/images/portfolio/abhishekVasavi/av2.JPG",
                "/images/portfolio/abhishekVasavi/av3.JPG",
                "/images/portfolio/abhishekVasavi/av8.JPG",
                "/images/portfolio/abhishekVasavi/av4.JPG",
                "/images/portfolio/abhishekVasavi/av5.JPG",
                "/images/portfolio/abhishekVasavi/av6.JPG",
                "/images/portfolio/abhishekVasavi/av7.JPG",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175913/Abhishek%20X%20Vasavi/442A2467_s3tviw.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175913/Abhishek%20X%20Vasavi/Cover_Back_rfwx7t.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175913/Abhishek%20X%20Vasavi/442A2109_oiikyo.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175913/Abhishek%20X%20Vasavi/442A2097_olkai6.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/14_copy_soxiv6.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/10_copy_ncvfud.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/12_copy_mqy1zg.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/13_copy_ektpaz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/09_copy_mkarru.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/08_copy_yvjsci.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/07_copy_q6yfro.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/06_copy_-_Copy_pfbeig.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/05_copy_e699lk.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/04_copy_jvzmc7.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/03_copy_viw4pi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175912/Abhishek%20X%20Vasavi/02_dlskr9.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/IMG_3207_e2cam1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/01_copy_zhyihj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/EH7A5324_c1kea3.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/EH7A3238_nadruv.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/cover_Front_oweoqe.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175911/Abhishek%20X%20Vasavi/EH7A5379_etaz2p.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175913/Abhishek%20X%20Vasavi/442A2477_zanfbc.jpg",


              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
