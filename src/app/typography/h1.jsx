import { Heading } from './system/heading'

export const H1 = props => (
  <Heading
    color="emperor"
    fontSize={[6,9]}
    lineHeight={[6,9]}
    mb={[2]}
    is="h1"
    textStyle="heading"
    { ...props }
  />
)
