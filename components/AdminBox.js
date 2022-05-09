import Image from "next/image";

export default function AdminBox({ src, name, desc }) {
  return (
    <div className="about-box">
      <div>
        <Image src={src} height="250px" width="250px" alt="img" />
        <h5>{name}</h5>
      </div>
      <span>{desc}</span>
    </div>
  );
}
