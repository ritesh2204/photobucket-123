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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862382/dipti%20x%20rajdip/DSC03370_qqaqe8.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862382/dipti%20x%20rajdip/DSC02657-Edit_jtzq0n.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862381/dipti%20x%20rajdip/DSC02696_tbytfs.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862381/dipti%20x%20rajdip/DSC03341_kfutoo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862381/dipti%20x%20rajdip/DSC02819-Edit_ombn8z.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862380/dipti%20x%20rajdip/DSC03327_ewo6oa.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862379/dipti%20x%20rajdip/DSC02320_iiuihi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862379/dipti%20x%20rajdip/DSC02516_jrd32a.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862379/dipti%20x%20rajdip/DSC03337_d9qk4j.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862379/dipti%20x%20rajdip/DSC02929_zhltqk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862378/dipti%20x%20rajdip/DSC02314_r6qbt6.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862378/dipti%20x%20rajdip/DSC02230_fh5xf2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862378/dipti%20x%20rajdip/DSC02815-Edit_puxrew.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862377/dipti%20x%20rajdip/DSC02846-Edit_t1mmqi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862377/dipti%20x%20rajdip/DSC02498_dwgqvm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862377/dipti%20x%20rajdip/DSC02160_d68kwr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862376/dipti%20x%20rajdip/DSC03393_recuw2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862376/dipti%20x%20rajdip/DSC02252_vi7s3h.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862376/dipti%20x%20rajdip/DSC02787-Edit_wcw5n9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862375/dipti%20x%20rajdip/DSC02900_nr7icq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862375/dipti%20x%20rajdip/DSC03290-Edit_qn3sid.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862375/dipti%20x%20rajdip/RPR_7015-Edit_hbknwu.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862375/dipti%20x%20rajdip/DSC03308-Edit_vqihgx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862374/dipti%20x%20rajdip/DSC03295-Edit_tbh2ig.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862374/dipti%20x%20rajdip/DSC03435_jc1yfr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862374/dipti%20x%20rajdip/DSC01581_ltxqvx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862374/dipti%20x%20rajdip/RPR_7369_oxz5k0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/DSC01720-Edit_gbhrva.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/DSC03017_oq05ir.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/RPR_6227-Edit_xk4edo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/RPR_7335_zjwdlo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/DSC02454_ktnlmj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862373/dipti%20x%20rajdip/DSC01766-Edit_jhcrkt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/RPR_7097-Edit_gcq0hp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/RPR_6152_dzw9wt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/DSC02087_knzghc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/RPR_3920-Edit_oucril.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/DSC02103_utai3t.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/DSC02865-Edit_fv1i7j.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862372/dipti%20x%20rajdip/DSC01939_ja2zp5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/DSC01847_rkxsyy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/RPR_7075-Edit_t01cch.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/DSC01893_ignoy1.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/DSC01861_tqattt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/DSC03382_jqoeyn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862371/dipti%20x%20rajdip/DSC01795-Edit_xchjz5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC03242_af3gt0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/RPR_6216-Edit_citgdv.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC01361-Edit_ls3wfc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC01563_eqhi7j.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC02684-Edit_ptjqiv.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC01711-Edit_ot6xfk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862370/dipti%20x%20rajdip/DSC02111_oh5tru.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862369/dipti%20x%20rajdip/DSC01740-Edit_w5nqr4.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862369/dipti%20x%20rajdip/DSC02469_c9qh4q.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862369/dipti%20x%20rajdip/DSC01782-Edit_bvldzl.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862369/dipti%20x%20rajdip/DSC01742-Edit_guqcw0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862369/dipti%20x%20rajdip/DSC01790-Edit_stc74b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862368/dipti%20x%20rajdip/DSC01682-Edit_eqp10t.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862368/dipti%20x%20rajdip/DSC01799-Edit_rxmtra.png",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
