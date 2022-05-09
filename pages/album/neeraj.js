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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/HSP_0182_thxdpn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795837/Neeraj/HSP_0106-Edit_pktkms.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795837/Neeraj/HSP_0564-Edit_q1nxvx.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/DSC_2792_feli3p.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/DSC_2796_haxu0h.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/DSC_3425_j1uefv.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/HSP_0582_zzd88k.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/HSP_9650_zxq5ei.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/HSP_9989_lbzt5g.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795836/Neeraj/HSP_9840_hwpu3j.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0070-Edit_gsg3qf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0383-Edit_rmjehn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0562-Edit_bvgcce.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0389-Edit_bltkid.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0397-Edit_ddw7si.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0688_unxmyh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_9713_fmhvmm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0098-Edit_o5ney9.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795835/Neeraj/HSP_0411-Edit_kl1ins.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/DSC_3039_nln3ek.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_9968_nrrjal.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0099-Edit_ikrwwu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0476_epmzvc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0541-Edit_kezpzh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0734_qjsclu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_9419_p6ugm6.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795834/Neeraj/HSP_0755_gcbge7.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0604_lwcsqn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0558-Edit_yyarwo.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0161_rcjutj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0546-Edit_wihkrm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/DSC_3920_wzaksu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_9383_mhzhgh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0510_w3ssme.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/HSP_9461_k8nnrh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_9763_sfupis.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795833/Neeraj/HSP_0612_togk5q.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/HSP_0551-Edit_lxbfur.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/DSC_3993_l5dzm2.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/HSP_0817_lclw1f.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/HSP_9668_omaivi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9995_eirktv.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795832/Neeraj/HSP_9889_njxa4r.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_0374-Edit_o1wb4r.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9780_ve59a1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/DSC_3985_vmoqah.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9611_xzk9kw.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9611_xzk9kw.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_0838_qup3rx.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9496_ymg9vu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795831/Neeraj/HSP_9653_ofzmsw.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_9679_pten4n.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0057-Edit_mrs5in.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0825_ijomfm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0063-Edit_fwcdr0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0245_zesvgm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0444_tmswzh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0380-Edit_yz24us.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0529-Edit_fcs1vc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0308_dmdrqu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0371-Edit_bvnctj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0089-Edit_xc1nkh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795830/Neeraj/HSP_0393-Edit_xwootb.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0403-Edit_ketkll.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_9434_jl64eo.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_9429_sp2nqo.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0533-Edit_i6lhts.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0345-Edit_ytgkss.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795829/Neeraj/HSP_0362-Edit_ua6xtj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0329-Edit_jsxqdn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0414-Edit_cab4ae.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0353-Edit_cekzrc.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0325-Edit_dls6wm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0422-Edit_h1ux6r.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633795828/Neeraj/HSP_0348-Edit_spduc0.jpg",
             

  
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
