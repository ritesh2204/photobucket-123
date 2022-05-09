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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945905/_Uncategorized/DSC08050_miz3r0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945905/_Uncategorized/0P3A4435_g3a4bp.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/RPR_4768_qtn1jc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/DSC08066_btdo0t.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/RPR_4501_xqwcey.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/RPR_4446_xmufzc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/RPR_4764_k6i6ap.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/IMG_9773_kmsrwz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/IMG_9725_zuuebj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/DSC08269_ptzpgu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/DSC02361_knjn0v.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945904/_Uncategorized/0P3A4418_ed9t6h.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/0P3A4462_lmunkd.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/DSC08252_amxjcr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_9304_mzyzbg.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_9664_olsv4j.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_0106_sgraa4.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/0P3A4500_vzd8ar.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_0100_kfgw95.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_9404_rwiug1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945903/_Uncategorized/IMG_9967_zehvb0.jpg",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
