import React, {PureComponent} from 'react';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3> EcoSystemOne Locations </h3>
        <p>Map showing top 20 most populated cities of the United States. Click on a marker to learn more.</p>
        <p color="blue"> <a href="#">Find location near you</a></p>
        {/* <div className="source-link">
          <a href="https://github.com/uber/react-map-gl/tree/4.1-release/examples/controls" target="_new">View Code ↗</a>
        </div> */}
      </Container>
    );
  }
}