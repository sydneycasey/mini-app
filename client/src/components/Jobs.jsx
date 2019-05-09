import React from 'react';

class Form extends React.Component {
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
      this.state.jobs.map((job) => (
        <div id="job">{job}</div>
      ))
    )
  }

}