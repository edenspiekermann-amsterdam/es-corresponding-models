import { Heading } from './system/heading'

export const H2 = props => (
  <Heading
    fontSize={[5]}
    lineHeight={[6]}
    mt={[0]}
    mb={[2]}
    is="h2"
    textStyle="heading"
    { ...props }
  />
)
