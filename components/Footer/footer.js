import "./footer.scss";

const Footer = () => (
  <div className="navbar navbar-expand navbar-dark bg-dark footer">
    <p className="copyright">
      &copy; {new Date().getFullYear()} BitzPrice, Inc.
    </p>
  </div>
);

export default Footer;
