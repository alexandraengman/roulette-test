import React from "react";

import { LoadingGif } from "./styles";

export default function Loader() {
  return <LoadingGif source={require("../../../assets/images/loading.gif")} />;
}
