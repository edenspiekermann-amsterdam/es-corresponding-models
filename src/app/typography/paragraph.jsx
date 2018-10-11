import { Text } from './text'

export const Paragraph = props => (
  <Text
    fontSize={[1, 2]}
    is="p"
    lineHeight="1.25"
    textStyle="base"
    { ...props }
  />
)
