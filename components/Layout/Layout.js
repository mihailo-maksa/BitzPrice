import NavBar from "../Navbar/Navbar";
import Head from "next/head";
import Footer from "../Footer/footer";
import "./Layout.scss";

const Layout = ({ children }) => (
  <div className="texture">
    <Head>
      <title>BitzPrice | Get The Current Bitcoin Rate</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
