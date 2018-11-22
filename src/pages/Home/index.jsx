import { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { Button } from "@tarojs/components";

@connect(
  ({ count }) => ({ count }),
  ({ count: { increment } }) => ({ increment })
)
class Home extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    );
  }
}
