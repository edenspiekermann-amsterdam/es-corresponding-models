import { Heading } from './system/heading'

export const H4 = props => (
  <Heading
    fontSize={[2,3]}
    lineHeight={[2,3]}
    mb={[1]}
    is="h4"
    textStyle="heading"
    { ...props }
  />
)
