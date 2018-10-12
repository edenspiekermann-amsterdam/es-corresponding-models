import { Heading } from './system/heading'

export const H1 = props => (
  <Heading
    color="emperor"
    fontSize={[3,5]}
    lineHeight={[3,5]}
    mb={[2]}
    is="h1"
    textStyle="heading"
    { ...props }
  />
)
