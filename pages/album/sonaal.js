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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/_MG_6904-Edit_yd3gpt.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/RPR_6141-Edit_q7vqmn.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/RPR_1489-Edit_j3liml.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/RPR_1497-Edit_yq8o3o.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/NFS_8419-Edit_a3cpf3.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/_MG_6967_ojv5li.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/RPR_1490-Edit_u8mr4o.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/DSC07752-Edit_g2iu8f.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847516/Sonaal/_MG_6884_mmnl2v.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC_3261_zaoxzu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC07759-Edit_wf1qp3.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/NFS_7577-Edit_xbcrgj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/NFS_8412-Edit_mm3mly.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC_3337_yew0cr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC07802-Edit_cjlvb1.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/DSC_4305_metu2q.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/DSC07795_n9cp5q.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/NFS_8437-Edit_fxrxxg.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847515/Sonaal/_MG_6874_buk4js.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/_MG_6890-Edit_fgzwny.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/_MG_6905-Edit_xryjba.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/NFS_8401-Edit_lmvojd.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/VR6A1485_naiivi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/DSC07739-Edit_eqjrhx.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/RPR_1486-Edit_wgqzsr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/RPR_1460_homd1c.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/RPR_1473-Edit_y2ye0n.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847514/Sonaal/NFS_7584-Edit_inuwir.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/DSC08545-Edit_mkedqz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_6338_icqja8.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1949_mtxvwz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_6293_ponun0.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1796_c5mesp.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1833_rkdfh6.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/_MG_6900-Edit_ib88ec.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1498-Edit_aa2fz5.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/NFS_8397-Edit_nd5isj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1546-Edit_qo0emj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847513/Sonaal/RPR_1551-Edit_rrsx6z.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/RPR_1495-Edit_z6uaih.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/RPR_1535-Edit_z77bqu.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/RPR_1492-Edit_tiosxj.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/NFS_8395-Edit_vmxy2x.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/RPR_1847_tnkwzm.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/NFS_7618-Edit_i1egdx.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/RPR_1545-Edit_ui8v0v.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/NFS_7607-Edit_okqsji.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847512/Sonaal/NFS_7613-Edit_oraryi.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/NFS_7602-Edit_xkaaoe.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/NFS_7588-Edit_rdzx9g.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/RPR_1973-Edit_ti75jz.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/RPR_1612_cu5neq.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/NFS_7594-Edit_w5stdg.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/RPR_2031_jndyno.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/RPR_1692_jwrubr.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/RPR_6338_1_l0orgl.jpg",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633847511/Sonaal/VR6A1485_1_y4unry.jpg",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
