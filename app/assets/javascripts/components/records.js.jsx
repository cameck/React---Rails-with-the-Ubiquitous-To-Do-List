
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

  returnRecord: function(record){
    return (
      <Record key={record.id} record={record}/>
    )
  },

  addRecord: function(record) {
    var records = this.state.records;
    records.push(record);
    this.setState({ records: records });
  },

  render: function() {
    return (
      <div className="records">
        <h2 className="title"> Records </h2>
        <RecordForm handleNewRecord={this.addRecord} />
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
          </thead>
          <tbody>
            { this.state.records.map(this.returnRecord) }
          </tbody>
        </table>
      </div>
    );
  }
});
