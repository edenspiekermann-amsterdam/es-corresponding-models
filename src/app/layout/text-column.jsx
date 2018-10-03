import styled from 'styled-components'
import { Column } from './column'

export const TextColumn = styled(Column)

TextColumn.defaultProps = {
  px: ['18px', '18px'],
  pl: ['18px', '16px', 0],
  pr: ['18px', '16px', '24px'],
}
