import { useRouter } from "next/router";

export default function AlbumTitle() {
  const router = useRouter();
  const AlbumName = router.pathname.replace("/album/", "");

  return (
    <div className="ms-section__block" style={{ textAlign: "center" }}>
      <div className="ms-page-title">
        <h2 className="page-header">
          {AlbumName.replace("-", `${" "}and${" "}`)} Albums
        </h2>
        <p className="page-desc">
          Conveniently fashion global intellectual capital whereas front-end
          strategic theme areas.
        </p>
      </div>
    </div>
  );
}
