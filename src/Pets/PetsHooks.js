import React, { useEffect, useReducer } from "react";
import { getPet } from "./api";
import initialState from "./initialState";
import Pet from "./Pet";

function petsReducer(state, action) {
  switch (action.type) {
    case "PET_SELECTED": {
      return {
        ...state,
        selectedPet: action.payload
      };
    }
    case "FETCH_PET": {
      return {
        ...state,
        loading: true,
        petData: null
      };
    }
    case "FETCH_PET_SUCCESS": {
      return {
        ...state,
        loading: false,
        petData: action.payload
      };
    }

    case "RESET": {
      return initialState;
    }

    default:
      throw new Error(`Not supported action ${action.type}`);
  }
}

function Pets() {
  const [pets, dispatch] = useReducer(petsReducer, initialState);

  const onChange = ({ target }) => {
    dispatch({ type: "PET_SELECTED", payload: target.value });
  };

  useEffect(() => {
    if (pets.selectedPet) {
      dispatch({ type: "FETCH_PET" });
      getPet(pets.selectedPet).then(data => {
        dispatch({ type: "FETCH_PET_SUCCESS", payload: data });
      });
    } else {
      dispatch({ type: "RESET" });
    }
  }, [pets.selectedPet]);

  return (
    <div>
      <select value={pets.selectedPet} onChange={onChange}>
        <option value="">Select a pet</option>
        <option value="cats">Cats</option>
        <option value="dogs">Dogs</option>
      </select>
      {pets.loading && <div>Loading...</div>}
      {pets.petData && <Pet {...pets.petData} />}
    </div>
  );
}

export default Pets;
