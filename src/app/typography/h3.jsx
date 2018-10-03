import { Heading } from './system/heading'

export const H3 = props => (
  <Heading
    fontSize={[3, 5]}
    is="h3"
    lineHeight={['28px', '40px']}
    textStyle="heading"
    { ...props }
  />
)