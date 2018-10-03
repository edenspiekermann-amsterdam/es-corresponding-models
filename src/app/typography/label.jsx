import { Text } from './text'

export const Label = props => (
  <Text
    fontSize={[1]}
    is="p"
    lineHeight={['24px']}
    my={0}
    textStyle="heading"
    { ...props }
  />
)