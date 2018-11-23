import { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { AtButton, AtInput } from "taro-ui";

@connect(
  ({ todo: { todos } }) => ({ todos }),
  ({ todo: { add } }) => ({ add })
)
class Home extends Component {
  state = {
    text: ""
  };
  add = () => {
    const { add } = this.props;
    const { text } = this.state;
    if (text) {
      add(text);
      this.setState({ text: "" });
    }
  };
  handleChange = text => this.setState({ text });
  render() {
    const { todos } = this.props;
    const { text } = this.state;
    return (
      <div>
        <AtInput value={text} onChange={this.handleChange} />
        <AtButton onClick={this.add}>+</AtButton>
        {todos}
      </div>
    );
  }
}
