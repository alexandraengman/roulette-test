import React from "react";
import PropTypes from "prop-types";

import { ButtonContainer, ButtonText } from "./styles";

export default function Button(props) {
  const { text, onPress } = props;
  return (
    <ButtonContainer onPress={() => onPress()}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
