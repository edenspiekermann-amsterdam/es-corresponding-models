import { Fragment } from 'react'

import { Text } from '../../app/typography'
import { Select } from '../select/select'
import styled from 'styled-components'

const Label = styled(Text)`
  display: block;
`

export const Filter = ({ display, id, label, options = [], ...rest }) => {
  const filters = options.map(option => {
    return { label: option.name, value: option.filter }
  })

  return (
    <Fragment>
      <Label fontSize={2} htmlFor={id} is="label">
        {label}
      </Label>
      <Select display={display} id={id} options={filters} {...rest} />
    </Fragment>
  )
}

Filter.defaultProps = {
  display: 'block',
}
