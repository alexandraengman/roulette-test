import styled from "styled-components/native";
import { Image, Dimensions, ScrollView } from "react-native";

import Colors from "../../design/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.white};
`;

export const FoodImage = styled(Image)`
  width: ${width}px;
  height: ${height * 0.4}px;
`;

export const FoodTitle = styled.Text`
  width: 100%;
  color: ${Colors.tintColor};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  background-color: ${Colors.white};
`;

export const InfoScroll = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;

export const CopyContainer = styled.View`
  width: 100%;
  padding: ${width * 0.02}px;
`;

export const FoodBody = styled.Text`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  padding: 4px;
  background-color: ${Colors.white};
`;
