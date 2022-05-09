import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AdminBox from "../components/AdminBox";

export default function About() {
  return (
    <>
      <Head>
        <title>Akshay Mehta - About</title>
      </Head>
      <main className="ms-container">
        {/* <!-- Page Title --> */}
        <div className="ms-section__block" style={{ marginBottom: "1rem" }}>
          <div className="ms-page-title">
            <h2 className="page-header">who am i?</h2>
          </div>
          <p>
            If you have created your blog to promote your business, you’ll want
            to make sure that there’s a page that details the goods and services
            that you sell. Alternatively, if you already have a website for your
            business, you can provide a link to it in your menu. A blog is a
            low-cost, low-risk way to invite readers into your world and begin a
            conversation with your company. 68% of consumers are likely to spend
            time reading content produced by a company they are interested in.
          </p>

          <div className="about-container">
            <AdminBox
              src="/images/dummy-images/businessman.png"
              name="Akshay Mehta"
              desc="A blog is a
            low-cost, low-risk way to invite readers into your world and begin a
            conversation with your company. "
            />
            <AdminBox
              src="/images/dummy-images/businessman.png"
              name="Gawrav Mehta"
              desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, "
            />
            <AdminBox
              src="/images/dummy-images/businessman.png"
              name="Rizwan Chouhan"
              desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. "
            />
            <AdminBox
              src="/images/dummy-images/businessman.png"
              name="Manish Sahu"
              desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <AdminBox
              src="/images/dummy-images/woman.png"
              name="Shivani Panda"
              desc="In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances"
            />
          </div>
        </div>
      </main>
    </>
  );
}
