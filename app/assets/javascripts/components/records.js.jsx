
var Records = React.createClass({

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

  returnRecord(record, i){
    return (
      <Record key={i} record={record}/>
    )
  },

  render: function() {
    return (
      <div className="records">
        <h2 className="title"> Records </h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
            {
              this.state.records.map(this.returnRecord)
            }
          </tbody>
        </table>
      </div>
    );
  }
});
