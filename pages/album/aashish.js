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
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945945/Aashish/DSC02390_vlixkg.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945945/Aashish/DSC02237_ivetfs.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945945/Aashish/DSC02321_cphqyx.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945945/Aashish/DSC02166_gkchx5.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC01782_y2lig7.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC00760_lv60c7.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC01989_nj9f44.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC02048_omoowb.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC00688_vmetty.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC02357_qkbnvs.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC02243_tdbuv2.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945944/Aashish/DSC02383_1_js61fg.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC00207_snpzl3.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC01355_z6srb3.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC02208_ldsytn.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC01210_ixparg.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC02443_uujp5n.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC01099_rvurd9.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC02397_licf3d.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC00825_i62had.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC02477_kbsfnh.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945943/Aashish/DSC00452_jptud8.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC00203_rqdyfi.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01107_fgaiig.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01226_cmvmoo.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01082_upfnrh.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01473_cqixuq.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01242_houeaa.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01284_ks3gwh.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC00768_xes2xe.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945942/Aashish/DSC01213_fmottt.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC00243_ebj7kf.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC00658_kbalxk.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC01171_ipirzb.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC01031_tqwvvg.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC01170_j36v1m.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC00918_hp0el7.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC00875_rahgfy.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945941/Aashish/DSC00502_jpwglv.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC00458_ghgrp4.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC00380_lo1k51.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC00436_xfu9xy.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01902_xcr02y.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01969_tg5ogz.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01611_lujv38.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01744_nota2r.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01694_zkzk9r.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01490_jqsc2w.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01600_b1xm4q.jpg",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633945940/Aashish/DSC01484_eljbcn.jpg"

            ]}
          />
        </div>
      </div>
    </main>
  </>
);
 }