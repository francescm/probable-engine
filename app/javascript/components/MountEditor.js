import React, { useState } from "react"
import MountList from './MountList';
import MountForm from './MountForm';

const MountEditor = (params) => {
  const { csrf, mymounts } = params;	
  const [ mounts, setMounts ] = useState(mymounts);

  return (
      <React.Fragment>
	<MountList mounts={mounts} />
	<MountForm 
	    onSubmit={setMounts}
	    mounts={mounts}
	    csrf={csrf}/>
      </React.Fragment>
    );
}

export default MountEditor
