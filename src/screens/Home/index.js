import { Text } from 'react-native'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import ImageGrid from '../../components/ImageGrid'
import { Container, TitleContainer, ButtonContainer } from './styles'
import { useMeals } from '../../hooks/useMeals'

function Home(props) {
  const { navigation } = props

  const { meals, offset, loading, fetchData } = useMeals()

  const numberOfMealsInBatch = meals ? meals.length : 0
  console.log('Number Of Meals In Batch: ', numberOfMealsInBatch)
  console.log('OFFSET: ', offset)

  if (loading || numberOfMealsInBatch < 4) return <Spinner />

  return (
    <Container>
      <ImageGrid meals={meals} navigation={navigation} />
      <ButtonContainer>
        <Button
          text={loading ? 'Loading' : 'Refresh Choices'}
          onPress={fetchData}
        />
      </ButtonContainer>
      <TitleContainer>
        <Text numberOfLines={2} ellipsizeMode='tail' style={{ width: 300 }}>
          Tap an image for more information, or hit 'refresh' to spin for more
          choices
        </Text>
      </TitleContainer>
    </Container>
  )
}

export default Home
