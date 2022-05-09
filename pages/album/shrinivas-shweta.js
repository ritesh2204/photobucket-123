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
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946165/Shweta%20x%20Shrinivas%20/RPR_9707-Edit_dzkd4i.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946164/Shweta%20x%20Shrinivas%20/RPR_9731-Edit_vxdif1.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946164/Shweta%20x%20Shrinivas%20/RPR_9032-Edit_epgi4k.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_9638-Edit_qatk4l.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946164/Shweta%20x%20Shrinivas%20/RPR_8977-Edit_ldus0k.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946164/Shweta%20x%20Shrinivas%20/RPR_9699-Edit_bpgjp3.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_9129-Edit_yu2ms9.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946164/Shweta%20x%20Shrinivas%20/RPR_9683-Edit_xlqmtd.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_8893-Edit_axgvif.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_8952-Edit_tov1zy.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_0032-Edit_ilmuat.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_9041-Edit_e09ohs.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_9685-Edit_zqp759.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946163/Shweta%20x%20Shrinivas%20/RPR_8966-Edit_kesdem.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_9692-Edit_ay4zvu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_8924-Edit_kbomya.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_0038-Edit_amrk0j.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_8918-Edit_f5h3u0.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_9635-Edit_pgeucn.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_8970-Edit_rtm3g1.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946162/Shweta%20x%20Shrinivas%20/RPR_9275-Edit_wxxjfc.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9289-Edit_tt7bv7.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9711-Edit_ycpbsg.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9639-Edit_zxb3gc.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9632-Edit_zjlv9q.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9048-Edit_kwva2o.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_9695-Edit_dnofbw.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946161/Shweta%20x%20Shrinivas%20/RPR_8886-Edit_zkdq6y.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9678-Edit_rqc7eb.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9086-Edit_z5s6fu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9124-Edit_bpxnqb.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_8889-Edit_ciz5x7.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9691-Edit_nujrmn.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9688-Edit_gsvyd9.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9720-Edit_nnepzr.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9697-Edit_nfdidk.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9668-Edit_w0pgbq.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946159/Shweta%20x%20Shrinivas%20/RPR_9641-Edit_xodkit.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946160/Shweta%20x%20Shrinivas%20/RPR_9657-Edit_tm2voj.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633946159/Shweta%20x%20Shrinivas%20/RPR_9647-Edit_nsj5ga.png",
            ]}
          />
        </div>
      </main>
    </>
  );
}
