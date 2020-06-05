import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import _ from "lodash";

const Synopsis = ({ synopsis }) => {
  let [ showText, setShowText ] = useState(false);
  let x = document.getElementById("synopsis");

  if (!_.isEmpty(x)) {
    if (showText) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <React.Fragment>
      <h4
        onClick={() => {
          setShowText(!showText)
        }}
      >
        <Icon name="dropdown" />
        Synopsis
      </h4>
      {showText ? <div id="synopsis">{synopsis}</div> : ""}
    </React.Fragment>
  );
};

export default Synopsis;
