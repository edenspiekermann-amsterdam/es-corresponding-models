import { Heading } from './system/heading'

export const H4 = props => (
  <Heading
    fontSize={[3, 4]}
    is="h4"
    lineHeight={['28px', '32px']}
    textStyle="heading"
    { ...props }
  />
)
