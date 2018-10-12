import { Heading } from './system/heading'

export const Display = props => (
  <Heading
    fontSize={[5,8]}
    lineHeight={[5,8]}
    is="h"
    textStyle="display"
    { ...props }
  />
)
