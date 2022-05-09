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
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/0T3A0975-Edit_pwak6d.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_2650-Edit_puyvvw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/0T3A1044-Edit_pipyib.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_1119-Edit_eeffgh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_2609-Edit_a6gf9l.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_1426-Edit_kd4oj6.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_1467-Edit_sx73id.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_3468-Edit_cfz6ea.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_1401-Edit_oqfgi5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853146/Manisha%20X%20Vibhas/RPR_1501-Edit_vyuumc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_3009-Edit_b5nl39.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1440-Edit_ps8155.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1116-Edit_t490qc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1409-Edit_uxrqnw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_3099-Edit_sfbu9g.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1496-Edit_zo3fcz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/RPR_1530-Edit_vzzxzz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1488-Edit_na4ynv.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/0T3A1033-Edit_ernppg.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853145/Manisha%20X%20Vibhas/RPR_1474-Edit_ljx7mk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/0T3A1105-Edit_f5xycz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/0T3A0992-Edit_isurjc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/RPR_2684-Edit_koxbmb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/RPR_1534-Edit_i2y3xb.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853144/Manisha%20X%20Vibhas/RPR_1111-Edit_bp5uyp.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853143/Manisha%20X%20Vibhas/0T3A0964-Edit_urgk2i.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853143/Manisha%20X%20Vibhas/0T3A1063-Edit_exqja5.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853143/Manisha%20X%20Vibhas/0T3A0900-Edit_lp4k1j.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853143/Manisha%20X%20Vibhas/0T3A1054-Edit_iesgjf.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853143/Manisha%20X%20Vibhas/0T3A1097-Edit_p1mayh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853154/Manisha%20X%20Vibhas/0T3A1490-Edit_hpkyc2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853154/Manisha%20X%20Vibhas/RPR_3039-Edit_thd39i.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/RPR_2947-Edit_hm23ys.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/0T3A1136-Edit_gtnrpr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/RPR_3121-Edit_rsoetd.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/0T3A1000-Edit_m5t5yt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/RPR_3454-Edit_yhsnmo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/RPR_3142-Edit_cy3njz.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853153/Manisha%20X%20Vibhas/RPR_2906-Edit_q4ezoh.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/0T3A1014-Edit_dofrzn.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/0T3A0960-Edit_c2cl6v.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/RPR_3200-Edit_obbb3b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/RPR_2632-Edit_fkhrsk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_3451-Edit_pq3x5d.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/RPR_2939-Edit_xquor3.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_2910-Edit_vsda0w.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853152/Manisha%20X%20Vibhas/RPR_2958-Edit_e3uowe.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/0T3A1481-Edit_jtrzxw.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_3107-Edit_ub9zsx.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_1469-Edit_gkwk5u.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/0T3A1037-Edit_pctnj3.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/0T3A1048-Edit_q9mfyk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_2931-Edit_winpuv.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853151/Manisha%20X%20Vibhas/RPR_3190-Edit_fic1zy.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_2580-Edit_ln1y0r.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_3085-Edit_mebplj.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_3104-Edit_j3pxve.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_2896-Edit_m8d71b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_3011-Edit_hn5y91.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_3036-Edit_keqxdt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/0T3A0995-Edit_nnv0vm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_2591-Edit_sqk4nt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853150/Manisha%20X%20Vibhas/RPR_3187-Edit_crap5b.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/0T3A0970-Edit_ypcnk2.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_2663-Edit_ltvdms.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_2979-Edit_oavdto.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/0T3A1017-Edit_uhrima.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_2897-Edit_oh1fov.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_1414-Edit_qgs971.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853149/Manisha%20X%20Vibhas/RPR_3113-Edit_vori2d.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_2559-Edit_mqmaz9.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/0T3A0909-Edit_mwihwm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_3092-Edit_lmzwgt.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_2921-Edit_ytymcr.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_3117-Edit_bs7oll.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_2697-Edit_jv1fcd.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_2528-Edit_psfnop.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853148/Manisha%20X%20Vibhas/RPR_2783-Edit_jntgrc.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/0T3A1027-Edit_z9e52a.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_1075-Edit_kg2ihm.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_2792-Edit_m1j6bo.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_2513-Edit_fm68jk.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/0T3A1039-Edit_w4rh2g.png",
                "https://res.cloudinary.com/akshaymehta/image/upload/v1633853147/Manisha%20X%20Vibhas/RPR_3097-Edit_ls3ofb.png",
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}
