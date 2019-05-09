import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      applied: false,
      sent_app: Date,
      outreach: false,
      sent_email: Date,
      callback: false,
      received: Date
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    let data = [this.state.company, this.state.applied, this.state.sent_app, this.state.outreach, this.state.sent_email, this.state.callback, this.state.received];

    axios.post('/newJob', data)
      .then(res => console.log(res))
      .then(body => console.log('successfully inserted', body))
      .catch(error => console.log('form error', error));
  }

  render() {
    console.log(this.state);
    return (
      <form id="job-form" onSubmit={this.handleSubmit}>
        <label>
          Company Name
        <input
            type="text"
            name="company"
            value={this.state.company}
            onChange={this.handleChange} />
        </label>
        <label>
          Applied
        <input
            name="applied"
            type="checkbox"
            checked={this.state.applied}
            onChange={this.handleChange} />
          <input
            type="date"
            name="sent_app"
            defaultValue="2019-05-02"
            onChange={this.handleChange} />
        </label>
        <label>
          Outreach Email Sent
        <input
            type="checkbox"
            name="outreach"
            checked={this.state.outreach}
            onChange={this.handleChange} />
          <input
            type="date"
            name="sent_email"
            defaultValue="2019-05-02"
            onChange={this.handleChange} />
        </label>
        <label>
          Callback Received
        <input
            type="checkbox"
            name="callback"
            checked={this.state.callback}
            onChange={this.handleChange} />
          <input
            type="date"
            name="received"
            defaultValue="2019-05-02"
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="+" />
      </form>
    )
  }
}

export default Form;
