import "./Prices.scss";

class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    const { bpi } = this.props;
    const { currency } = this.state;

    return (
      <div className="prices-container">
        <ul className="list-group">
          <li className="list-group-item">
            <strong className="rate">The Current Bitcoin Rate is:</strong>
            <strong> {bpi[currency].rate}</strong>
            <span className="badge badge-primary"> {bpi[currency].code} </span>
          </li>
        </ul>
        <br />
        <select
          className="form-control"
          onChange={e => this.setState({ currency: e.target.value })}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
