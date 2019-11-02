import React from "react"
import PropTypes from "prop-types"
class MountList extends React.Component {
	
  render () {
    const mounts = this.props.mounts;   
    return (
      <React.Fragment>
        <h2>Mounts</h2>
	    <ul>
	{
  	mounts.map((mount) =>
    	    <li key={mount.id}>{mount.name} {mount.height}</li>
  	)
	}
	    </ul>
      </React.Fragment>
    );
  }
}

MountList.propTypes = {
  mounts: PropTypes.array
};
export default MountList
