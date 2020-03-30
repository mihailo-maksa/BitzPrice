import Layout from "../components/Layout/Layout";
import Link from "next/link";
import "./about.scss";

const About = () => (
  <Layout>
    <div className="about-container">
      <h1 className="about-title" style={{ margin: "30px 0 20px" }}>
        About BitzPrice
      </h1>
      <p className="about-info">
        <Link href="/">
          <a title="BitzPrice">
            <strong>BitzPrice </strong>
          </a>
        </Link>{" "}
        is an app that allows you to{" "}
        <strong>check the current Bitcoin (BTC)</strong> rate in multiple
        currencies, including USD, GBP & EUR.
      </p>
    </div>
  </Layout>
);

export default About;
