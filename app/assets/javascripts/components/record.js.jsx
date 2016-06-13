this.Record = React.createClass({
  render: funtion() {
      return React.DOM.tr(null, React.DOM.td(null, this.props.record.date),
             React.DOM.td(null, this.props.record.title),
             React.DOM.td(null, amountFormat(this.props.record.amount))
           );
  }
});
