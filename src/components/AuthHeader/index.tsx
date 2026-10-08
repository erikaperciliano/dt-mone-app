import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible'
import { Image, View, type ImageSourcePropType } from 'react-native'

const LogoImg = require('@/assets/Logo.png') as ImageSourcePropType

export const AuthHeader = () => {
  const keyboardIsVisible = useKeyboardVisible()

  if (keyboardIsVisible) return null

  return (
    <View className="items-center justify-center w-full min-h-40">
      <Image
        source={LogoImg}
        className="h-[48px] w-[255px]"
        resizeMode="contain"
      />
    </View>
  )
}