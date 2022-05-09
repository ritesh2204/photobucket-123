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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946097/Karan%20x%20Kritika/RPR_6280-Edit_sgqzqc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946097/Karan%20x%20Kritika/RPR_7164-Edit_hkygt9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946097/Karan%20x%20Kritika/RPR_7147-Edit_wso7bn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946097/Karan%20x%20Kritika/RPR_6286-Edit_q3dtmj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_7000-Edit_hgmitm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_7169-Edit_ztfg8y.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_6953-Edit_j4fqth.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_7156-Edit_tolbgh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_6954-Edit_mscfxa.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_6974-Edit_ob351q.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_7070-Edit_cdmles.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_6931-Edit_j829qw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_6918-Edit_mzthoy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946096/Karan%20x%20Kritika/RPR_7129-Edit_bp5ivr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7135-Edit_ajix7l.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7118-Edit_bfijod.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7085-Edit_bfhlvp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7170-Edit_kutozr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7082-Edit_u6id8b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_6291-Edit_wzroki.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946095/Karan%20x%20Kritika/RPR_7102-Edit_m2tnlg.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7100-Edit_rcp85s.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7042-Edit_ga7ogi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7035_ejtrej.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7014-Edit_gxoplx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7090-Edit_ckiuuf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633946094/Karan%20x%20Kritika/RPR_7038-Edit_k5bzbk.png",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
