import { Text } from './text'

export const Quote = props => (
  <Text
    fontSize={[4, 6]}
    is="p"
    lineHeight={['32px', '44px']}
    textStyle="base"
    { ...props }
  />
)