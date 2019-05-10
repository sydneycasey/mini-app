import React from 'react';
import axios from 'axios';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      showModal: false
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch('/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({ jobs }))
      .catch(error => console.log(error));
  };

  handleDelete(job) {

    var data = { id: job.id, company: job.company }
    console.log(job);

    axios.post('/deleteJob', data)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  };

  render() {
    return (
      <table id="jobs-table">
        <thead>
          <tr id="headers">
            <th id="company">Company</th>
            <th id="applied">Applied</th>
            <th id="outreach">Outreach Sent</th>
            <th id="received">Callback Received</th>
            <th id="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.jobs.map((job) => (
            <tr key={job.id} id="jobs-list">
              <td id="company">{job.company}</td> //onclick should turn to textbox. new company name should be saved and sent to server to update db
              <td id="applied">
                {job.applied ? 'yes' : 'no'}
              </td>
              {/* <td id="sent_app">
                {this.state.showTime ? job.sent_app : null}
              </td> */}
              <td id="outreach">{job.outreach ? 'yes' : 'no'}</td>
              {/* <td id="sent_email">{job.outreach ? job.sent_email : null}</td> */}
              <td id="callback">{job.callback ? 'yes' : 'no'}</td>
              {/* <td id="received">{job.callback ? job.received : null}</td> */}
              <td id="action"><a>Edit</a>|<button onClick={() => this.handleDelete(job)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Jobs;
