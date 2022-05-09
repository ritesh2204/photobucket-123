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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2374-Edit_dwfbh2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2406-Edit_yy9cuk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2419-Edit_eoisuy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2408-Edit_hsxotb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2827-Edit_nquonw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2373-Edit_xhn6qb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862692/Aditi%20x%20Arpit/NFS_2371-Edit_bpqw4x.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2382-Edit_rkfjvx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2383-Edit_ho42fq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2501-Edit_sfcujq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2426-Edit_teq1q2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2825-Edit_jqysht.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862691/Aditi%20x%20Arpit/NFS_2365-Edit_mkq5sf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2423-Edit_ogptk1.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2412-Edit_kctodt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2514-Edit_tdqotu.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2394-Edit_bl8jln.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2368-Edit_zh4qqn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2400-Edit_y2v2qj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2396-Edit_dvooon.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862690/Aditi%20x%20Arpit/NFS_2776-Edit_aj5nwp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2820-Edit_bgvumt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2498-Edit_sc8bd3.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2774-Edit_foolub.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2802-Edit_zyblzo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2781-Edit_jzckyc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2510-Edit_efcht2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2505-Edit_o1hrck.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2429-Edit_cedask.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862689/Aditi%20x%20Arpit/NFS_2819-Edit_iqoqub.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2799-Edit_ajxxfi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2471-Edit_x7cipy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2476-Edit_svso6z.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2491-Edit_wkng2q.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2464-Edit_vzvao0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2457-Edit_xvlsrq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862688/Aditi%20x%20Arpit/NFS_2450-Edit_pagc0p.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862687/Aditi%20x%20Arpit/NFS_2432-Edit_bkcrpb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862687/Aditi%20x%20Arpit/NFS_2447-Edit_ncieix.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862687/Aditi%20x%20Arpit/NFS_2489-Edit_t1y68n.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862687/Aditi%20x%20Arpit/NFS_2441-Edit_ylhapy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862687/Aditi%20x%20Arpit/NFS_2439-Edit_o7nqqf.png",

  
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
