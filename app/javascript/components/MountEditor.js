import React from "react"
import PropTypes from "prop-types"
import MountList from './MountList';
import MountForm from './MountForm';

class MountEditor extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {mounts: this.props.mounts};
  }

  handleMountSubmit = (data) => {
	  const csrf = this.props.csrf;
	  var mounts = this.state.mounts;
	  console.log(data);
	  fetch('/mounts', {
		  method: 'POST',
		  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrf
                  },		  
		  body: JSON.stringify(data),
	  });
    mounts.push(data);	  
    this.setState({mounts: mounts});
    console.log(this.state);
  }

  render () {
    return (
      <React.Fragment>
	<MountList mounts={this.state.mounts} />
	<MountForm onSubmit={this.handleMountSubmit}/>
      </React.Fragment>
    );
  }
}

MountEditor.propTypes = {
  mounts: PropTypes.array,
  csrf: PropTypes.string
};
export default MountEditor
