var RecordForm = React.createClass({

  getInitialState: function() {
    return {
      title: '',
      date: '',
      amount: ''
    };
  },

  handleChange: function(e) {
    e.preventDefault();
    $.post('',
           { record: this.state },
           function(data) {
             this.props.handleNewRecord(data);
             this.setState(this.getInitialState());
           }.bind(this),
           'JSON'
    );
  },
  
  render: function() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type='text' className='form-control'
                 placeholder='Date' name='date'
                 value={this.state.date} onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <input type='text' className='form-control'
                 placeholder='Title' name='title'
                 value={this.state.title} onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <input type='text' className='form-control'
                 placeholder='Amount' name='amount'
                 value={this.state.amount} onChange={this.handleChange}>
          </input>
        </div>
        <div className="form-group">
          <input type="submit" className='btn btn-primary'
                 disabled={!this.valid()}>
          </input>
        </div>
      </form>
    );
  }
})
