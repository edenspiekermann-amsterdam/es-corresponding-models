import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { display, themeGet } from 'styled-system'

import { Icon } from '../../app/icon/icon'

const parseM2 = str => {}

const SelectProxy = styled.select`
  /* hide-text */
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0 calc(100% - 1px) calc(100% - 1px) 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  /* /hide-text */
`

const SelectWrapper = styled.div`
  ${display} position: relative;
`

const SelectLabel = styled.label`
  display: block;
  font-size: ${8 / 9}rem;
  margin-bottom: 0.5rem;
`

const SelectSelected = styled.button`
  /* reset-input */
  background: transparent none;
  border: 0;
  border-radius: 0;
  font-family: ${themeGet('textStyles.base.font-family', 'sans-serif')};
  margin: 0;
  min-width: 0;
  padding: 0;
  text-align: left;
  color: ${themeGet('colors.base', 'black')};

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* /reset-input */

  align-items: center;
  cursor: pointer;
  display: inline-flex;
  width: 100%;

  /* Yes, this is ugly but there's no easy way to extend styles of our Icon
     component yet. */
  > svg {
    flex-shrink: 0;
    margin-left: 0.5rem;
  }

  /* @media (min-width: ${themeGet('breakpoints.1', '768px')}) { */
    border-bottom: solid 2px ${themeGet('colors.action', 'yellow')};

    /* TODO: should we give selects a set font-size */
    font-size: ${themeGet('fontSizes.4', 24)}px;

    font-weight: bold;
    justify-content: space-between;
    line-height: ${10 / 6};
  /* } */
`

const SelectList = styled.ul`
  /* body font styles */
  font-family: ${themeGet('textStyles.base.font-family', 'sans-serif')};
  font-size: 1rem;
  font-weight: normal;
  line-height: ${16 / 9};
  /* /body font styles */

  position: absolute;
  left: 0;
  /* right: 0; */
  min-width: 100%;
  top: 100%;

  /* resetList */
  list-style: none;
  margin: 0;
  padding-left: 0;
  /* /resetList */

  box-shadow: 0 0 16px rgba(0,0,0,0.1);
  background-color: ${themeGet('colors.quartz', 'grey')};
  z-index: 10;

  ${({ isActive }) =>
    !isActive &&
    css`
      display: none;
    `};
`

const SelectOption = styled.li`
  align-items: center;
  background-color: ${themeGet('colors.quartz', 'grey')};
  cursor: pointer;
  display: flex;
  padding: ${4 / 9}rem ${8 / 9}rem;

  &:hover {
    background-color: ${themeGet('colors.action', 'yellow')};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${themeGet('colors.quartz', 'grey')};
    `};
`

export class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
      selectedIndex: this.props.selectedIndex,
    }

    this.handleOutside = this.handleOutside.bind(this)
    this.toggleList = this.toggleList.bind(this)
    this.setWrapper = this.setWrapper.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutside)
  }

  setWrapper(node) {
    this.wrapper = node
  }

  handleOutside(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.closeList()
    }
  }

  closeList(event) {
    event && event.preventDefault()
    this.setState(state => ({ isActive: false }))
  }

  openList(event) {
    event && event.preventDefault()
    this.setState(state => ({ isActive: true }))
  }

  toggleList(event) {
    event && event.preventDefault()
    this.setState(state => ({ isActive: !state.isActive }))
  }

  handleSelect(event, option, callback) {
    event && event.preventDefault()

    this.setState(state => {
      let newState = {
        isActive: false,
        selectedIndex: option.index,
        value: option.value,
      }

      if (callback) {
        callback(event, newState)
      }

      return newState
    })
  }

  render() {
    const { display, isActive, label, options, onChange, ...rest } = this.props

    return (
      <SelectWrapper display={display} innerRef={this.setWrapper}>
        {label && <SelectLabel>{label}</SelectLabel>}

        <SelectSelected onClick={this.toggleList}>
          {options[this.state.selectedIndex]
            ? options[this.state.selectedIndex].label
            : label}

          <Icon icon="chevron-down" />
        </SelectSelected>

        <SelectList isActive={this.state.isActive}>
          {options.map((option, index) => (
            <SelectOption
              isSelected={index === this.state.selectedIndex}
              key={index}
              onClick={event =>
                this.handleSelect(
                  event,
                  { index, value: option.value },
                  onChange
                )
              }
            >
              {option.label}
            </SelectOption>
          ))}
        </SelectList>

        <SelectProxy selectedIndex={this.state.selectedIndex} {...rest}>
          {options.map((option, index) => (
            <option key={index} value={JSON.stringify(option.value)}>
              {option.label}
            </option>
          ))}
        </SelectProxy>
      </SelectWrapper>
    )
  }
}

Select.defaultProps = {
  label: '',
  name: 'noName',
  options: [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
  ],
  selectedIndex: 0,
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  selectedIndex: PropTypes.number,
}

SelectWrapper.defaultProps = {
  display: 'inline-block',
}
