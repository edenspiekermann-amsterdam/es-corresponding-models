import { Text } from './text'

export const Paragraph = props => (
  <Text
    fontSize={[0, 1]}
    lineHeight={[0,1]}
    is="p"
    lineHeight="1.25"
    textStyle="base"
    { ...props }
  />
)
