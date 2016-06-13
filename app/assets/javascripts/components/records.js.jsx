
this.Records = React.createClass({
  getInitialState: function() {
    return {
      records: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      records: []
    };
  },
  render: function() {
    return (
      <div className="records">
      <h2 className="title"> Records </h2>
      </div>
    );
  }
});
