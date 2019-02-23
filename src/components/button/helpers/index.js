import styles from '../styles'

export const getButtonStyles = () => {
  return {
    ...styles.reset,
    ...styles.base
  }
}

export const getButtonText = (ButtonType, text) => {
  return ButtonType !== 'input' ? text : null
}

export const getInputProps = (ButtonType, text) => {
  if (ButtonType !== 'input') return {}
  return {
    type: 'button',
    value: text
  }
}
