import React from "react";
import { TouchableOpacity } from "react-native";
import { Grid } from "react-native-easy-grid";

import Spinner from "../Spinner";
import {
  GridContainer,
  FoodImageSquare,
  FoodTitle,
  GridRow,
  GridColumn,
} from "./styles";

export default function ImageGrid(props) {
  const { meals, navigation } = props;
  const numberOfMealsInBatch = meals.length;
  console.log("Number Of Meals In Batch: ", numberOfMealsInBatch);

  // ToDo: Props for <FoodTitle/> to be made modular

  return (
    <>
      {numberOfMealsInBatch < 4 ? (
        <Spinner />
      ) : (
        <GridContainer>
          <Grid>
            <GridColumn>
              <GridRow>
                {/* OPTION ONE */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detail", { item: meals[0] })
                  }
                >
                  <FoodImageSquare
                    source={{
                      uri:
                        meals[0].picture ||
                        require("../../../assets/images/noImage.png"),
                    }}
                    resizeMode="cover"
                    imageStyle={{ borderTopLeftRadius: 36 }}
                  >
                    <FoodTitle
                      duration={9000}
                      loop
                      bounce
                      repeatSpacer={5}
                      marqueeDelay={1000}
                    >
                      {meals[0].title}
                    </FoodTitle>
                  </FoodImageSquare>
                </TouchableOpacity>
              </GridRow>
              <GridRow>
                {/* OPTION TWO */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detail", { item: meals[1] })
                  }
                >
                  <FoodImageSquare
                    source={{
                      uri:
                        meals[1].picture ||
                        require("../../../assets/images/noImage.png"),
                    }}
                    resizeMode="cover"
                    imageStyle={{ borderBottomLeftRadius: 36 }}
                  >
                    <FoodTitle
                      duration={9000}
                      loop
                      bounce
                      repeatSpacer={5}
                      marqueeDelay={1000}
                    >
                      {meals[1].title}
                    </FoodTitle>
                  </FoodImageSquare>
                </TouchableOpacity>
              </GridRow>
            </GridColumn>

            <GridColumn>
              <GridRow>
                {/* OPTION THREE */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detail", { item: meals[2] })
                  }
                >
                  <FoodImageSquare
                    source={{
                      uri:
                        meals[2].picture ||
                        require("../../../assets/images/noImage.png"),
                    }}
                    resizeMode="cover"
                    imageStyle={{ borderTopRightRadius: 36 }}
                  >
                    <FoodTitle
                      duration={9000}
                      loop
                      bounce
                      repeatSpacer={5}
                      marqueeDelay={1000}
                    >
                      {meals[2].title}
                    </FoodTitle>
                  </FoodImageSquare>
                </TouchableOpacity>
              </GridRow>
              <GridRow>
                {/* OPTION FOUR */}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detail", { item: meals[3] })
                  }
                >
                  <FoodImageSquare
                    source={{
                      uri:
                        meals[3].picture ||
                        require("../../../assets/images/noImage.png"),
                    }}
                    resizeMode="cover"
                    imageStyle={{ borderBottomRightRadius: 36 }}
                  >
                    <FoodTitle
                      duration={9000}
                      loop
                      bounce
                      repeatSpacer={5}
                      marqueeDelay={1000}
                    >
                      {meals[3].title}
                    </FoodTitle>
                  </FoodImageSquare>
                </TouchableOpacity>
              </GridRow>
            </GridColumn>
          </Grid>
        </GridContainer>
      )}
    </>
  );
}
