import { Heading } from './system/heading'

export const H2 = props => (
  <Heading
    color="emperor"
    fontSize={[2,4]}
    lineHeight={[2,4]}
    mb={[2]}
    is="h2"
    textStyle="heading"
    { ...props }
  />
)
