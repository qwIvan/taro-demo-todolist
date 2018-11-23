import { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View } from "@tarojs/components";
import { AtButton, AtInput, AtCheckbox, AtDivider } from "taro-ui";

@connect(
  ({ todo: { todos } }) => ({ todos }),
  ({ todo: { add } }) => ({ add })
)
class Home extends Component {
  state = {
    text: "",
    completed: []
  };
  add = () => {
    const { add } = this.props;
    const { text } = this.state;
    if (text) {
      add(text);
      this.setState({ text: "" });
    }
  };
  handleInput = text => this.setState({ text });
  handleCheck = value => this.setState({ completed: value });
  render() {
    const { todos } = this.props;
    const { text, completed } = this.state;
    return (
      <View>
        <AtInput value={text} onChange={this.handleInput} />
        <AtButton onClick={this.add}>+</AtButton>
        <AtCheckbox
          options={todos.map(todo => ({ value: todo.id, label: todo.text }))}
          selectedList={completed}
          onChange={this.handleCheck}
        />
        <AtDivider content={`${completed.length}/${todos.length}`} />
      </View>
    );
  }
}
