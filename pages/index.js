import Layout from "../components/Layout/Layout";
import Prices from "../components/Prices/Prices";
import Fetch from "isomorphic-unfetch";
import Link from "next/link";
import "./index.scss";

const Index = ({ bpi, title, slug }) => (
  <Layout>
    <div>
      <h1>BitzPrice</h1>
      <p>
        <strong>Check the Current Bitcoin Rate:</strong>
      </p>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async props => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  const bpi = data.bpi;

  let title = "Latest Post";
  let slug = "latest-post";

  return { bpi, title, slug };
};

export default Index;
