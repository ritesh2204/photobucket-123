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
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796955/Srishti%20x%20Saurabh/RPR_9178-Edit_uypaxm.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796955/Srishti%20x%20Saurabh/RPR_9126-Edit_b6rxk4.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796955/Srishti%20x%20Saurabh/RPR_9131-Edit_pwr2sh.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796955/Srishti%20x%20Saurabh/DSC_4293_t8x8cl.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796955/Srishti%20x%20Saurabh/RPR_9169-Edit_hirjbp.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9138-Edit_dibmns.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9019-Edit_ahgfss.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9078-Edit_bssxp7.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9015-Edit_dctysp.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9129-Edit_nju6og.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9070-Edit_bqsbpc.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9089-Edit_j8fez1.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9033-Edit_dslzrz.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9060-Edit_lxe5iv.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9026-Edit_r1w2xe.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796954/Srishti%20x%20Saurabh/RPR_9068-Edit_iozwqr.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9063-Edit_brwxre.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9028-Edit_pnxp1r.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9739-Edit_tdr3n9.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9096-Edit_ytf1ad.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9039-Edit_mpxseg.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796953/Srishti%20x%20Saurabh/RPR_9057-Edit_w2oe66.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9053-Edit_ua9hrb.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9046-Edit_cfphoh.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9727-Edit_ragcz3.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9745-Edit_y4aufg.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9748-Edit_ac4k9h.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9731-Edit_rjly9c.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796952/Srishti%20x%20Saurabh/RPR_9721-Edit_gffcdg.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9713-Edit_qwzjcy.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9711-Edit_fpiviu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9709-Edit_zshswu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9108-Edit_lmh7yy.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9117-Edit_zxlerb.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9112-Edit_ell5pj.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633796951/Srishti%20x%20Saurabh/RPR_9100-Edit_c8jije.png",
            ]}
          />
        </div>
      </main>
    </>
  );
}
