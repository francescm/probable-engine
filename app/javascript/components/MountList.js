import React from "react"
import PropTypes from "prop-types"
class MountList extends React.Component {
	
  render () {
    return (
      <React.Fragment>
        <h2>Mounts</h2>
	    <ul>
	{
  	this.props.mounts.map((mount) =>
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
