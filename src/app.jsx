import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import store from "./store";
import Home from "./pages/Home";

class App extends Component {
  config = {
    pages: ["pages/Home/index"]
  };
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
