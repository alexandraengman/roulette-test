import styled from "styled-components/native";
import { Dimensions, ImageBackground } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import TextTicker from "react-native-text-ticker";

import Colors from "../../design/Colors";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const GridContainer = styled.View`
  margin-vertical: ${height * 0.05}px;
  height: ${height * 0.5}px;
`;

export const FoodImageSquare = styled(ImageBackground)`
  flex: 1;
  align-content: center;
  justify-content: center;
  resize-mode: cover;
  width: ${width * 0.48}px;
  margin: 4px;
`;

export const FoodTitle = styled(TextTicker)`
  color: ${Colors.shadowColor};
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  height: 25px;
  background-color: ${Colors.white};
  padding-right: 20px;
`;

export const GridColumn = styled(Col)`
  width: 50%;
`;

export const GridRow = styled(Row)`
  height: 200px;
`;
