import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import store from "./store";

class App extends Component {
  config = {
    pages: ["pages/Home/index"]
  };
  render() {
    return <Provider store={store} />;
  }
}

Taro.render(<App />, document.getElementById("app"));
