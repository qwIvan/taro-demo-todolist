import { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { Button, Input } from "@tarojs/components";

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
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { todos } = this.props;
    const { text } = this.state;
    return (
      <div>
        <Input value={text} onInput={this.handleChange} />
        <Button onClick={this.add}>+</Button>
        {todos}
      </div>
    );
  }
}
