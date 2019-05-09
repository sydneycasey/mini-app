import React from 'react';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch('/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({ jobs }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <table id="jobs-table">
        <thead>
          <tr id="headers">
            <th id="company">Company</th>
            <th id="applied">Applied</th>
            <th id="sent_app">Application Date</th>
            <th id="outreach">Outreach Sent</th>
            <th id="received">Callback Received</th>
          </tr>
        </thead>
        <tbody>
          {this.state.jobs.map((job) => (
            <tr id="jobs-list">
              <td id="company">{job.company}</td>
              <td id="applied">{job.applied ? 'yes' : 'no'}</td>
              <td id="sent_app">{job.sent_app === null ? 'N/A' :
                job.sent_app
              }</td>
              <td id="outreach">{job.outreach ? 'yes' : 'no'}</td>
              <td id="sent_email">{job.sent_email}</td>
              <td id="callback">{job.callback ? 'yes' : 'no'}</td>
              <td id="received">{job.received}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

}

export default Jobs;
