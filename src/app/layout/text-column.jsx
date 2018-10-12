import styled from 'styled-components'
import { Column } from './column'

export const TextColumn = styled(Column)

TextColumn.defaultProps = {
  px: ['16px', '20px'],
  pl: ['16px', '20px', 0],
  pr: ['16px', '20px', '24px'],
}
