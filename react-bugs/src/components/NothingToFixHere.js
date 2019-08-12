import React from "react";
import ProductionReady from "./ProductionReady";

export default class NothingToFixHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time };
    this._update = this.updateTime();
  }
  render() {
    return (
      <div>
        <p>This is the current time (seconds should be counting up):</p>
        <ProductionReady {...this.extract(this.state.time)} />
      </div>
    );
  }
  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  extract(time) {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }
  updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000) });
  }
}
