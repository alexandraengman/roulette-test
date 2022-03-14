import React, { useEffect, useState } from "react";

import axios from "../../data/axios";
import requests from "../../data/requests";
import Loader from "../../components/Loader";
import {
  Container,
  FoodImage,
  FoodTitle,
  FoodBody,
  CopyContainer,
  InfoScroll,
} from "./styles";
import Colors from "../../design/Colors";

function Detail(props) {
  const { route } = props;
  const { item } = route.params;
  const { id, picture, title } = item;
  const url = requests.fetchMealWithId;

  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${url}` + `${id}`);
      setMeal(request.data.meal_roulette_app_meals_by_pk);
      setLoading(false);
      return request;
    }
    fetchData();
  }, []);

  return (
    <Container>
      <FoodImage source={{ uri: picture }} />
      <FoodTitle>{title}</FoodTitle>

      {loading ? (
        <Loader />
      ) : (
        <InfoScroll>
          <CopyContainer>
            <FoodBody>{meal.description}</FoodBody>
          </CopyContainer>
          <CopyContainer>
            <FoodBody style={{ color: Colors.tintColor }}>
              You will need...
            </FoodBody>
            <FoodBody>
              {meal.ingredients.split(",").map((item) => (
                <FoodBody>{item}</FoodBody>
              ))}
            </FoodBody>
          </CopyContainer>
        </InfoScroll>
      )}
    </Container>
  );
}

export default Detail;
