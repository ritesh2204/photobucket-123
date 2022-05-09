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
                 "https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/7T4A8605_dmshjb.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/HSP_2222-Edit_ldinnm.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/HSP_2114-Edit_vx4new.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/HSP_1927-Edit_qxokoj.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/HSP_2190-Edit_gcseih.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/7T4A8626_zhpjfx.png.",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862510/Anubha%20x%20Sidharth/HSP_2185-Edit_xaquyr.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_1942-Edit_c4kvgj.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2233-Edit_wcpqgi.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2031-Edit_wbyloj.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2034-Edit_r2op1b.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2208-Edit_bewrhe.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2155-Edit_bwkqwf.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2205-Edit_gqbd0q.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2198-Edit_wakoaf.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862509/Anubha%20x%20Sidharth/HSP_2002-Edit_ubetnn.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_2173-Edit_mjq01e.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_1725_edxv6t.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_2180-Edit_jb0eve.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_2177-Edit_gpqedx.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_1920-Edit_a7nslr.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_2022-Edit_zfojnh.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_2024-Edit_quecka.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_1989-Edit_nwsmbf.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862508/Anubha%20x%20Sidharth/HSP_1580_dopnvs.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_1826_kmf6cw.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2042-Edit_fmgast.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2105-Edit_g2wnwl.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2168-Edit_yjbkrw.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2129-Edit_rod5qr.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2148-Edit_czblex.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2099-Edit_s6s9or.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2144-Edit_tmamot.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862507/Anubha%20x%20Sidharth/HSP_2087-Edit_nn5zhd.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/HSP_2038-Edit_ucljyq.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/7T4A9017_ks0cwf.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/7T4A8714_qupfxx.png.",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/7T4A8727_hbltl1.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/7T4A8971_nt4v2q.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862506/Anubha%20x%20Sidharth/7T4A8971_nt4v2q.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8692_kb1d3q.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8756_zkx5tp.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8648_f9sdob.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8903_znorjm.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8939_fwyd9j.png",
"https://res.cloudinary.com/akshaymehta/image/upload/v1633862505/Anubha%20x%20Sidharth/7T4A8675_khxsji.png",


              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}