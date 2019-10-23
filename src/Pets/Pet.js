import React from "react";

function Pet({ name, voice, avatar }) {
  return (
    <div>
      <h2>{name}</h2>
      <div>{`Voice - ${voice}`}</div>
      <div>{avatar}</div>
    </div>
  );
}

export default Pet;
