
import Head from "next/head";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function Layout({children,home}){
    return(<>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/> 
        </Head>
        <div className="ms-main-container">
        <div className="ms-preloader"></div>
        <Navbar/>   
        {children}
        {children[1].type.name ==="Home"?null:<Footer/>}
        </div>
  </>)
};