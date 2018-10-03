import { Text } from './text'

export const Paragraph = props => (
  <Text
    fontSize={[1, 2]}
    is="p"
    lineHeight={['24px', '32px']}
    textStyle="base"
    { ...props }
  />
)