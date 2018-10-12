import { Heading } from './system/heading'

export const H3 = props => (
  <Heading
    fontSize={[3,4]}
    lineHeight={[3,4]}
    is="h3"
    textStyle="heading"
    { ...props }
  />
)
