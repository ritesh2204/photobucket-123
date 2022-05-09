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
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868666/Kshiti%20x%20Nilesh/RPR_0071-Edit_fhfids.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868666/Kshiti%20x%20Nilesh/RPR_9992-Edit_lh50rj.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/DSC_6960-Edit_ecw4xo.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9987-Edit_kmhiws.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9990-Edit_o5g9jd.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868666/Kshiti%20x%20Nilesh/RPR_0024-Edit_zwdxpg.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9265-Edit_aull39.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_0044-Edit_odhmzr.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9985-Edit_tgynux.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9996-Edit_jbztpu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_0070-Edit_blyocl.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868665/Kshiti%20x%20Nilesh/RPR_9305-Edit_z5lpvj.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_0067-Edit_xxxgr4.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_9298-Edit_egmv7t.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_0021-Edit_brckjd.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_9138-Edit_bls4bp.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_8034-Edit_gppy7f.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868664/Kshiti%20x%20Nilesh/RPR_9159-Edit_btbhp8.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_8041-Edit_rffy3e.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0042-Edit_ej48g1.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0041-Edit_qwxffj.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0004-Edit_la4zuw.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_9134-Edit_rycob5.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_9983-Edit_tra5w6.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0052-Edit_trlwpm.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_8045-Edit_dfbq6u.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0012-Edit_eh682e.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_0013-Edit_kdvpmk.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_9283-Edit_lxirsx.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868663/Kshiti%20x%20Nilesh/RPR_9301-Edit_srufng.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_9317-Edit_runtmz.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_9263-Edit_aqsd3p.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_9294-Edit_srhzla.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_0060-Edit_awxibk.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_8031-Edit_mxno2o.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868662/Kshiti%20x%20Nilesh/RPR_9278-Edit_enb82a.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_9167-Edit_fu2vh3.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_8024-Edit_hrzqrs.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_9148-Edit_pzn892.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_0081-Edit_hrijhc.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_9118-Edit_wjphxf.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_8020-Edit_jlmqrl.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_9308-Edit_hsblmx.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_0046-Edit_jfjuwi.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868661/Kshiti%20x%20Nilesh/RPR_9161-Edit_u0fvk2.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_0077-Edit_p8gzct.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_8122-Edit_muwigu.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_8100-Edit_fkoh7z.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_8047-Edit_xo9ekq.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_8094-Edit_td9j9v.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_0001-Edit_cq7rnr.png",
              "https://res.cloudinary.com/akshaymehta/image/upload/v1633868660/Kshiti%20x%20Nilesh/RPR_0084-Edit_ugwexp.png",
            ]}
          />
        </div>
      </div>
    </main>
  </>
);
 }