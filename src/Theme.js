import styled from 'styled-components'

export const colors={
  milkshake: '#F9D7C3',
  frankfurter: '#EFA6A1',
  soda : '#7ECFCF',
  tomato: '#E46B61'
}

export const fonts={
  'primary': "'Domine', serif;",
  'text' : "'Lato', sans-serif;",
}

export const Title= styled.h1`
  font-family: ${(props) => props.theme.fonts.primary};
  size: 2rem;
`

export const Heading= styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  size: 1.5rem;
`

export const SubHeading= styled.h2`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.tomato};
  size: 1.25rem;
`
export const P = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
`
export const Theme = {
  backgroundColor: colors.milkshake,
  colors: colors,
  baseTextSize: '12pt',
  fonts: fonts,
}

