import { Heading } from './system/heading'

export const H2 = props => (
  <Heading
    fontSize={[4, 6]}
    is="h2"
    lineHeight={['32px', '44px']}
    textStyle="heading"
    { ...props }
  />
)