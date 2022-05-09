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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850926/Moksh/DSC_1100-Edit_jsyn9a.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850926/Moksh/DSC_1076-Edit_mhbukr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_1027-Edit_wf3n4l.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0351-Edit_h6stpb.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0533-Edit_mvpnu6.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_1174-Edit_qf6tvh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0247-Edit_bbsnsx.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_1186-Edit_gtocw5.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0519-Edit_j6f0m4.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_1142-Edit_wp1pnu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_9750-Edit_jpqphh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_0984-Edit_d1spne.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0187-Edit_tm4gqk.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0141-Edit_hbk9cn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850925/Moksh/DSC_0406-Edit_fwc6n0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_1020-Edit_ago9yt.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_0941-Edit_z3jmib.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_9959-Edit_br88gu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_9980-Edit_colc5f.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_1487_t1cz8f.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_0464-Edit_yr1boi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_0421-Edit_ccay1q.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850924/Moksh/DSC_0486-Edit_lyudds.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_0335-Edit_pb8k0j.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_0323-Edit_jaotih.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_0580-Edit_qpt9mi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_9979-Edit_fjf3bq.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_9973-Edit_q3cuan.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_0219-Edit_xxzioq.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_9504-Edit_xwxjz5.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_9894-Edit_jsmdlh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_1267-Edit_a0lsj9.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_0132-Edit_to8smi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850923/Moksh/DSC_1444-Edit_jwuvpi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_0155-Edit_cd6r3f.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_1115-Edit_upbuph.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_1251-Edit_vphlok.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_0566-Edit_y5fcye.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_1436-Edit_ffx2pn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_9884-Edit_mlj7iz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_9841-Edit_xm0yp1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_0887-Edit_nyk4ni.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_0796-Edit_q8w3bt.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850922/Moksh/DSC_9615-Edit_omaonp.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9715-Edit_gkonhm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_0019-Edit_rwkj7i.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9546-Edit_rouwlb.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9662-Edit_cszbdk.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9839-Edit_d9x03d.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_0789-Edit_nrzhjz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9754-Edit_f82ki3.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_9829-Edit_ofjag9.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_0747-Edit_fuoruu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_0769-Edit_ef37wf.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850921/Moksh/DSC_0011-Edit_robaoa.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_9877-Edit_pkyjfn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_1421-Edit_tlwszy.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_0639-Edit_vw3lq0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_9641-Edit_x54ap4.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_1305-Edit_badkwl.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_1354-Edit_duf8pm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_0618-Edit_nfxijh.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_0624-Edit_fvxsav.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633850920/Moksh/DSC_0693-Edit_bmjpbo.jpg",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
