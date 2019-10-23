import React from "react";
import { getPet } from "./api";
import initialState from "./initialState";
import Pet from "./Pet";

class Pets extends React.Component {
  state = initialState;

  componentDidUpdate(_, prevState) {
    debugger;
    const { selectedPet } = this.state;
    if (prevState.selectedPet !== selectedPet) {
      if (selectedPet) {
        this.setState({
          ...this.state,
          loading: true,
          petData: null
        });
        getPet(selectedPet).then(data => {
          this.setState({
            ...this.state,
            loading: false,
            petData: data
          });
        });
      } else {
        this.setState(initialState);
      }
    }
  }

  onChange = ({ target }) => {
    this.setState({
      ...this.state,
      selectedPet: target.value
    });
  };

  render() {
    const { selectedPet, loading, petData } = this.state;
    return (
      <div>
        <select value={selectedPet} onChange={this.onChange}>
          <option value="">Select a pet</option>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
        </select>
        {loading && <div>Loading...</div>}
        {petData && <Pet {...petData} />}
      </div>
    );
  }
}

export default Pets;
