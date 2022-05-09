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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945994/Abhisek%20x%20preeti/DSC03647-Edit_ul2aru.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945994/Abhisek%20x%20preeti/DSC03656-Edit_a6ot1a.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945994/Abhisek%20x%20preeti/DSC03651-Edit_fl4yol.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945994/Abhisek%20x%20preeti/DSC03642-Edit_rmolci.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945994/Abhisek%20x%20preeti/DSC03626-Edit_pmqlsi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03617-Edit_dls7ep.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03623-Edit_wonj2l.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03615-Edit_uvbx35.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03608-Edit_f01lpi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03600-Edit_wliodd.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03586-Edit_m4sjlc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03571-Edit_pe2e4l.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945993/Abhisek%20x%20preeti/DSC03581-Edit_lfommz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03520-Edit_ragscf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03569-Edit_vp4ab2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03555-Edit_czt0ll.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03515-Edit_a5qn6y.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03511-Edit_tz1cox.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03502-Edit_rrwohk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945992/Abhisek%20x%20preeti/DSC03497-Edit_afy81n.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC03485-Edit_kzhinw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC03477-Edit_xselja.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC03464-Edit_eni7ej.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC03457-Edit_pius4y.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC04268-Edit_rygm3b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC04252-Edit_debpb1.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945991/Abhisek%20x%20preeti/DSC04247-Edit_kqaotc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04229-Edit_jh1e9t.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04237-Edit_fhy7si.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04214-Edit_q8ww92.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04210-Edit_idfkoi.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04196-Edit_dubfca.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04194-Edit_pjuro2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04158-Edit_mozlcc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04186-Edit_gw0vtz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945990/Abhisek%20x%20preeti/DSC04179-Edit_o0qhde.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04139-Edit_kmhxbh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04151-Edit_tugype.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04132-Edit_dwhbqc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04124-Edit_olwsty.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04117-Edit_wusskt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04122-Edit_ldndpc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04104-Edit_efm0bm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945989/Abhisek%20x%20preeti/DSC04108-Edit_ebzbdx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04094-Edit_rbl5oy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04084-Edit_fyvoqw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04078-Edit_px6upf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04055-Edit_fhnfdy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04068-Edit_y9hwwh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04046-Edit_ylpueu.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945988/Abhisek%20x%20preeti/DSC04033-Edit_lnexsk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945987/Abhisek%20x%20preeti/DSC03999-Edit_lzrgps.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945987/Abhisek%20x%20preeti/DSC03994-Edit_xqgkvq.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945987/Abhisek%20x%20preeti/DSC03998-Edit_sfryej.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945987/Abhisek%20x%20preeti/DSC03991-Edit_ope1dp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03968-Edit_rbkdyz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03955-Edit_iplbkk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03937-Edit_cvwg11.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03908-Edit_zxktri.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03902-Edit_kwjwyw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03897-Edit_gxgymp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945986/Abhisek%20x%20preeti/DSC03866-Edit_oqyv0q.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03826-Edit_wneuug.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03844-Edit_fdjsay.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03822-Edit_i13sqw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03785-Edit_epgmns.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03759-Edit_jwtfnv.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945985/Abhisek%20x%20preeti/DSC03782-Edit_glxo3d.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03769-Edit_th47ix.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03797-Edit_nfqs1c.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03776-Edit_jwcgbx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03731-Edit_rkours.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03746-Edit_ncgptl.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945984/Abhisek%20x%20preeti/DSC03710-Edit_oj3nyd.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945983/Abhisek%20x%20preeti/DSC03699-Edit_wfyj5k.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945983/Abhisek%20x%20preeti/DSC03675-Edit_ncpm5f.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945983/Abhisek%20x%20preeti/DSC03667-Edit_daqo9g.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633945983/Abhisek%20x%20preeti/DSC03665-Edit_gupqtm.png",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
