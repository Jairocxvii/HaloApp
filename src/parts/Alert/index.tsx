import React, { useEffect, useState } from 'react'
import IAlert, { TypeAlert } from '../../models/IAlert';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Alert: React.FC<IAlert> = (AlertData: IAlert) => {


  const [colorAlert, setcolorAlert] = useState("red");
  useEffect(() => {
    switch (AlertData.Type) {
      case TypeAlert.danger:
        setcolorAlert("red");
        break;
      default:
        setcolorAlert("red");
        break;
    }

  }, []);
  return (<>
    <div role="alert">
      <div className={"bg-" + colorAlert + "-500 text-white font-bold rounded-t px-4 py-2 "}>
        {AlertData.Title}
        <div className="absolute top-0 bottom-0 right-0">
          <FontAwesomeIcon icon={faTimes} /></div>
      </div>
      <div className={"border border-t-0 border-" + colorAlert + "-400 rounded-b bg-" + colorAlert + "-100 px-4 py-3 text-red-700"}>
        <p>{AlertData.description}</p>
      </div>


    </div>
  </>
  );
}

export default Alert

