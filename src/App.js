import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./App.scss";
import Card from "./Card";
import data from "./data/data";
import logo from "./assets/logo.svg";

// class component
class App extends Component {
  state = {
    properties: data.properties,
    property: data.properties[0]
  };

  nextProperty = () => {
    //console.log("click!");
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
    //console.log(this.state.properties[newIndex]);
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;

    return (
      <div className="App">
        <div className="page">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Image slideshow React tutorial.</h1>
          </section>

          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <ButtonGroup className="buttonGroup">
          <ul>
            <li>
              <Button
                onClick={this.nextProperty}
                disabled={property.index === data.properties.length - 1}
              >
                Next
              </Button>
            </li>
            <li>
              <Button
                onClick={this.prevProperty}
                disabled={property.index === 0}
              >
                Prev
              </Button>
            </li>
          </ul>
        </ButtonGroup>
      </div>
    );
  }
}

export default App;
