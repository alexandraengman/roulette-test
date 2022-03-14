import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

import Colors from "../../design/Colors";

export const ButtonText = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${Colors.tintColor};
  border-radius: 5px;
  padding: 5px;
  margin: 8px;
`;
