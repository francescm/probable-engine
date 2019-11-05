import  React from "react"

const MountList = (params) => {
    const { mounts } = params;	
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

};

export default MountList
