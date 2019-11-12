import  React, { useState, useEffect } from "react"

const MountList = (params) => {
    const { trigger } = params;
    const [mounts, setMounts] = useState([]);	
    
    async function fetchMountsData() {
      const response = await fetch("/mounts.json");
      setMounts(await response.json());
    }

    useEffect(() => {
      fetchMountsData(); 
    }, [trigger]);

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
