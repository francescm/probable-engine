import React, { useState } from "react"
import MountList from './MountList';
import MountForm from './MountForm';

const MountEditor = (params) => {
  const { csrf, mymounts } = params;	
  const [ trigger, setTrigger ] = useState(0);

  return (
      <React.Fragment>
	<MountList trigger={trigger}/>
	<MountForm 
	    setTrigger={setTrigger}
	    trigger={trigger}
	    csrf={csrf}/>
      </React.Fragment>
    );
}

export default MountEditor
