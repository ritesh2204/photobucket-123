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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/DSC_6165-Edit_lujqeh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/RPR_5960-Edit_hzgc9z.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/DSC_6954_ycomlf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/RPR_6948-Edit_adj9ag.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/RPR_6901_hltyeg.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/DSC_6068-Edit_lv8z2n.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862605/Akriti%20x%20Akash/RPR_6897-2_mhyza5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/DSC_6081-Edit_vyr7af.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/DSC_6125-Edit_ajqidj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/DSC_6066-Edit_gci29f.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/RPR_6924_ozwrw7.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/RPR_6933-Edit_mojzyo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/DSC_6132-Edit_t3ec2p.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/RPR_6899_qa7bqk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862604/Akriti%20x%20Akash/DSC_6070-Edit_vt8bc8.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/RPR_6939-Edit_omqya5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6134-Edit_vnitvp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6045-Edit_nqzdmo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/RPR_5956-Edit_bjjvb1.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6059-Edit_dek6o0.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6063-Edit_g5byyc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6184-Edit_ov4x1a.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6173-Edit_nu2wke.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862603/Akriti%20x%20Akash/DSC_6140-Edit_qojtqk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6142-Edit_qfqm8i.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6174-Edit_skntn9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6166-Edit_nqury7.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6952_uo5puh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/RPR_6953-Edit_hihlgh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6942_kqiwhs.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6944_aplvsy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633862602/Akriti%20x%20Akash/DSC_6929_dg8uks.png",

              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}