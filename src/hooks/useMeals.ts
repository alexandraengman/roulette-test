import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import axios from '../data/axios'
import requests from '../data/requests'

export const useMeals = () => {
  const [meals, setMeals] = useState(null)
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  const url = requests.fetchFourMeals

  const fetchData = async () => {
    try {
      setLoading(true)
      const request = await axios.get(url + offset)
      setMeals(request.data.meal_roulette_app_meals_aggregate.nodes)
      setLoading(false)
      randomizeOffset()
    } catch (error) {
      Alert.alert('Fetch failed', error)
      setLoading(false)
    }
  }

  const randomizeOffset = () => {
    const int = Math.round(Math.random() * 8)
    const inRangeOffset = Math.min(Math.max(int, 0), 7)
    setOffset(inRangeOffset)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { meals, loading, offset, fetchData }
}
