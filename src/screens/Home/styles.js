import styled from "styled-components/native";
import { Dimensions } from "react-native";

import Colors from "../../design/Colors";

const height = Dimensions.get("window").height;

// Home Screen Styling
export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.white};
`;

export const TitleContainer = styled.View`
  margin-vertical: 0px;
`;

export const ButtonContainer = styled.View`
  margin-bottom: ${height * 0.05}px;
  flex-direction: row;
`;
