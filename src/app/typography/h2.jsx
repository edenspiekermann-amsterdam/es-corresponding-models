import { Heading } from './system/heading'

export const H2 = props => (
  <Heading
    color="emperor"
    fontSize={[4,7]}
    lineHeight={[4,7]}
    mb={[2]}
    is="h2"
    textStyle="heading"
    { ...props }
  />
)
