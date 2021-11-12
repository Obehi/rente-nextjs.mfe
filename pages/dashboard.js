import React, { useEffect } from 'react';



const dashboard = () => {

  useEffect(() => {
   
  }, [])
    useEffect(() => {

      const globalHackScript = `var global = global || window;
      var Buffer = Buffer || [];
      var process = process || {
        env: { DEBUG: undefined },
        version: []
      };`;
  
      const node = document.createElement('script');
      node.text = globalHackScript;
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
  
      //document.head.appendChild(globalHackScript);
      document.getElementsByTagName('head')[0].appendChild(node);
      
      const angularRoot = document.createElement('rente-root');
      document.body.appendChild(angularRoot); 

      const zoneNode = document.createElement('script');
      zoneNode.type = 'text/javascript';
      zoneNode.src = "https://unpkg.com/zone.js";
      zoneNode.charset = 'utf-8';
      node.async = true;
      document.body.appendChild(zoneNode); 

      setTimeout(() => {
        const test =  import('renteFrontEnd/web-components');
      }, 1000)
      }, []);
    return ( 
        <div>
             dashboard nextjs
        </div>
     );
}
 
export default dashboard;