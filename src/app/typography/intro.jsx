import { Text } from './text'

export const Intro = props => (
  <Text
    fontSize={[3, 4]}
    is="div"
    lineHeight={['24px', '32px']}
    textStyle="sectionHeading"
    { ...props }
  />
)
