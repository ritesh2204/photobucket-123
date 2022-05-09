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
                "/images/portfolio/akashSonal/as1.JPG",
                "/images/portfolio/akashSonal/as2.JPG",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175849/Aakash%20X%20Sonal/DSC_6118_hopce2.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633175849/Aakash%20X%20Sonal/0O2B8052_crpy8p.jpg",

              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
