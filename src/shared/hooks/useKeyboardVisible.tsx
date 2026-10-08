import { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'

export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'

    const keyboardShowListener = Keyboard.addListener(showEvent, () => {
      setIsKeyboardVisible(true)
    })

    const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
      setIsKeyboardVisible(false)
    })

    return () => {
      keyboardShowListener.remove()
      keyboardHideListener.remove()
    }
  }, [])

  return isKeyboardVisible
}