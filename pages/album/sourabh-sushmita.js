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
        <AlbumTitle/>
        <div className="ms-section__block">
          <div className="row">
            <ImageContainer
              images={[
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797605/Sourabh%20x%20Sushmita/HSP_7828_qms4rn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797605/Sourabh%20x%20Sushmita/HSP_7852_jrnpma.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797605/Sourabh%20x%20Sushmita/HSP_7869_zct0g5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797605/Sourabh%20x%20Sushmita/HSP_7809_wgdj0m.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797605/Sourabh%20x%20Sushmita/HSP_7803_s8goey.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7794_gdvtk8.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7748_wcoluh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7760_nkcy2b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7690_yvs60g.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7715_vrmpp9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797604/Sourabh%20x%20Sushmita/HSP_7663_glwz0w.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7586_y0eypw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7638_ufcpar.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7571_qtmgjo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7518_xacboq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7502_hy5og2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7552_lr07md.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7399_vqg8bl.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7340_a2hm9g.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_7242_vewg9m.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797603/Sourabh%20x%20Sushmita/HSP_7287_dftl4a.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_7202_h4vnna.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_7164_hvwr7n.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_8797_piaovn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_7132_zthfqy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8739_wx81vh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_8931_oovlzp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_8889_c8qdgb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797602/Sourabh%20x%20Sushmita/HSP_8778_tka4db.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8621_st1jlz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8640_titxri.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8625_hewxt9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8594_cfoeup.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8470_vyh24j.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8577_axizf7.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797601/Sourabh%20x%20Sushmita/HSP_8543_czsyyo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8530_fpncmq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8452_tapqta.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8489_jycdap.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8501_xss50r.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8444_hx35lc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797600/Sourabh%20x%20Sushmita/HSP_8433_nzxocj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8406_cgxqjj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8404_ep6tlw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8338_lupqrc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8378_pe80vw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8359_xqvjzy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8352_ypfd6z.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8236_vjodma.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8322_kmsndt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8313_cz887x.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797599/Sourabh%20x%20Sushmita/HSP_8301_pj2cw2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8184_fzwywb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8216_vtizyg.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8094_su8pzy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8158_sjx4bb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8148_yqjyo0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8107_xh9ypz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797598/Sourabh%20x%20Sushmita/HSP_8092_mmusmf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_7983_gsz7gd.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_8041_z8lp65.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_7968_e6lcbn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_8021_e68asi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_7911_gzkdce.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633797597/Sourabh%20x%20Sushmita/HSP_7979_fmxell.png",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
