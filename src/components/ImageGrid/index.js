import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Grid } from 'react-native-easy-grid'

import Spinner from '../Spinner'
import {
  GridContainer,
  FoodImageSquare,
  FoodTitle,
  GridRow,
  GridColumn
} from './styles'

export default function ImageGrid(props) {
  const { meals, navigation } = props
  const numberOfMealsInBatch = meals.length
  console.log('Number Of Meals In Batch: ', numberOfMealsInBatch)

  // ToDo: Props for <FoodTitle/> to be made modular

  if (numberOfMealsInBatch < 4) return <Spinner />

  return (
    <GridContainer>
      <Grid>
        <GridColumn>
          {meals.map((meal, index) => (
            <GridRow key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail', { item: meal })}
              >
                <FoodImageSquare
                  source={{
                    uri:
                      meal.picture ||
                      require('../../../assets/images/noImage.png')
                  }}
                  resizeMode='cover'
                  imageStyle={{ borderTopLeftRadius: 36 }}
                >
                  <FoodTitle
                    duration={9000}
                    loop
                    bounce
                    repeatSpacer={5}
                    marqueeDelay={1000}
                  >
                    {meal.title}
                  </FoodTitle>
                </FoodImageSquare>
              </TouchableOpacity>
            </GridRow>
          ))}
        </GridColumn>
      </Grid>
    </GridContainer>
  )
}
