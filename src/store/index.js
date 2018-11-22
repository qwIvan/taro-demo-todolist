import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";
import todo from "./todo";

export default init({
  models: {
    todo
  },
  plugins: [immerPlugin()]
});
