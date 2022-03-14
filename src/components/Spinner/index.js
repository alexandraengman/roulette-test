import React from "react";

import { SpinGif } from "./styles";

export default function Loader() {
  return <SpinGif source={require("../../../assets/images/spin.gif")} />;
}
