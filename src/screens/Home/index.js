import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import axios from "../../data/axios";
import requests from "../../data/requests";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import ImageGrid from "../../components/ImageGrid";
import { Container, TitleContainer, ButtonContainer } from "./styles";

function Home(props) {
  const { navigation } = props;
  const url = requests.fetchFourMeals;
  // Hooks
  const [meals, setMeals] = useState([]);
  const [offset, setOffset] = useState(1);
  const [loading, setLoading] = useState(true);

  const numberOfMealsInBatch = meals.length;
  console.log("Number Of Meals In Batch: ", numberOfMealsInBatch);
  console.log("OFFSET: ", offset);

  // On Screen Launch, 'meals' are from the API via getData and set in state
  useEffect(() => getData(), []);

  //On'REFRESH' button, offset is incremented, calling new 'meals'
  function getData() {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(url + offset);
      setMeals(request.data.meal_roulette_app_meals_aggregate.nodes);
      setLoading(false);
      setOffset(offset + 1);
      return request;
    }
    fetchData();
  }

  // API starts to return smaller batches of means (under 4) so requires re-setting
  function resetApi() {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(url + offset);
      setMeals(request.data.meal_roulette_app_meals_aggregate.nodes);
      setLoading(false);
      setOffset(4);
      return request;
    }
    fetchData();
  }

  return (
    <Container>
      {/* If no response from API, loading image shows */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* If less than 4 meals, API requires resetting */}
          {numberOfMealsInBatch < 4 ? (
            <>
              <Spinner />
              <Button text={"Reset Api"} onPress={resetApi} />
            </>
          ) : (
            // Otherwise, show 4 recipes in the grid
            <>
              <ImageGrid meals={meals} navigation={navigation} />
              <ButtonContainer>
                <Button
                  text={loading ? "Loading" : "Refresh Choices"}
                  onPress={getData}
                />
              </ButtonContainer>
              <TitleContainer>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{ width: 300 }}
                >
                  Tap an image for more information, or hit 'refresh' to spin
                  for more choices
                </Text>
              </TitleContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default Home;
