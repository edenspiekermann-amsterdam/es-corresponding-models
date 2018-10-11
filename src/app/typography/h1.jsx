import { Heading } from './system/heading'

export const H1 = props => (
  <Heading
    color="action"
    fontSize={[5, 7]}
    is="h1"
    lineHeight={['38px', '56px']}
    textStyle="heading"
    { ...props }
  />
)
