var Record = React.createClass({

  getInitialState: function() {
    return { edit: false };
  },

  handleEdit: function(e) {
    e.preventDefault();
    var data = { title: this.refs.title.value,
                 date: this.refs.date.value,
                 amount: this.refs.amount.value
               };
    $.ajax({
      method: 'PUT',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      data: { record: data },
      success: function() {
        this.setState({ edit: false });
        this.props.handleEditRecord(this.props.record, data);
      }.bind(this)
    });
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/records/' + this.props.record.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecord(this.props.record)
      }.bind(this)
    });
  },

  handleToggle: function(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  },

  recordRow: function() {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <button className="btn btn-default" onClick={this.handleToggle}>
             Edit
          </button>
          <button className="btn btn-danger" onClick={this.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  },

  recordForm: function() {
    return (
      <tr>
        <td>
          <input className='form-control' type='text'
                 defaultValue={this.props.record.date} ref='date' />
        </td>
        <td>
          <input className='form-control' type='text'
                 defaultValue={this.props.record.title} ref='title' />
        </td>
        <td>
          <input className='form-control' type='text'
                 defaultValue={this.props.record.amount} ref='amount' />
        </td>
        <td>
          <button className="btn btn-default" onClick={this.handleEdit}>
             Update
          </button>
          <button className="btn btn-danger" onClick={this.handleToggle}>
            Cancel
          </button>
        </td>
      </tr>
    );
  },

  renderedRecord: function() {
    if (!this.state.edit) {
      return this.recordRow();
    } else {
      return this.recordForm();
    }
  },

  render: function() {
    return this.renderedRecord();
  }
});
