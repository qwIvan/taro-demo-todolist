import Taro, { Component } from "@tarojs/taro";

class App extends Component {
  config = {
    pages: ["index"]
  };
  render() {
    return null;
  }
}

Taro.render(<App />, document.getElementById("app"));
