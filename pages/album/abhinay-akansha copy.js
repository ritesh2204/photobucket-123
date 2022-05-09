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
                "/images/portfolio/abhinayAkansha/a1.JPG",
                "/images/portfolio/abhinayAkansha/a2.JPG",
                "/images/portfolio/abhinayAkansha/a3.JPG",
                "/images/portfolio/abhinayAkansha/a8.JPG",
                "/images/portfolio/abhinayAkansha/a9.JPG",
                "/images/portfolio/abhinayAkansha/a7.JPG",
                "/images/portfolio/abhinayAkansha/a4.JPG",
                "/images/portfolio/abhinayAkansha/a5.JPG",
                "/images/portfolio/abhinayAkansha/a6.JPG",
                "/images/portfolio/abhinayAkansha/a10.JPG",

                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B0204_invorb.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B0181_t0oyyj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B0112_edg3m1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B0113_wehudk.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9717_a6pjba.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9780_copy_ipxo5v.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9704_flp7n0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9659_v23ojr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9780_irtpjd.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175875/Abhinay%20x%20Akamsha/0O2B9695_j2v8h5.jpg",

  
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
