import React, { Component } from 'react';

export class PlanetProperties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.triggerParentUpdate}>Update Parent</button>
  }
}
