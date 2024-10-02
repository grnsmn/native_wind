import React from 'react'
import { Text, View } from 'react-native'

type Props = {}

const Card = (props: Props) => {
  return (
    <View className='flex bg-primary-300'>
        <Text className='text-white pb-sm font-sans text-center text-sm'>
          Card
        </Text>
    </View>
  )
}

export default Card