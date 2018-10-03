import { Component, Fragment } from 'react'
import Slider, { Range } from 'rc-slider'
import styled, { css } from 'styled-components'
import { display, themeGet } from 'styled-system'

import './range-select-css'
import { Box } from '../../app/layout'
import { Icon } from '../../app/icon/icon'
import { Text } from '../../app/typography'

const Label = styled(Text)`
  display: block;
`

const RangeWrapper = styled.div`
  ${display} position: relative;
`

const RangeLabel = styled.label`
  display: block;
  font-size: ${8 / 9}rem;
  margin-bottom: 0.5rem;
`

const RangeSelected = styled.button`
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

const RangeBox = styled(Box)`
  border-top: solid 2px ${ themeGet('colors.action', 'yellow') };
  box-shadow: 0 6px 10px 1px rgba(193,193,193,0.5);
  position: absolute;
  top: calc(100% - 2px);
  z-index: 1;

  ${ ({ align }) =>
    (align === 'left' || align === 'right')
      ? css`${ align }: 0;`
      : css`left: 0;`
  }
`

export class RangeSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      min: this.props.min,
      max: this.props.max,
      isRangeBoxActive: false,
    }

    this.handleOutside = this.handleOutside.bind(this)
    this.onRangeUpdate = this.onRangeUpdate.bind(this)
    this.setWrapper = this.setWrapper.bind(this)
    this.toggleRangeBox = this.toggleRangeBox.bind(this)
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
      this.setState({ isRangeBoxActive: false })
    }
  }

  onRangeUpdate(values) {
    const [ min, max ] = values

    this.setState(state => {
      if (this.props.onChange) {
        const changeMin = min !== this.props.min ? min : null
        const changeMax = max !== this.props.max ? max : null

        this.props.onChange({
          min: changeMin,
          max: changeMax,
        })
      }

      return { min, max }
    })
  }

  toggleRangeBox() {
    this.setState(state => ({ isRangeBoxActive: !state.isRangeBoxActive }))
  }

  render() {
    const marks = {
      [this.props.min]: {
        label: <Fragment>{ this.props.labelPrefix }{this.props.min}{ this.props.labelSuffix }</Fragment>,
        style: {
          marginLeft: '-7px',
          width: 'auto',
        },
      },
      [this.props.max]: {
        label: <Fragment>{ this.props.labelPrefix }{this.props.max}{ this.props.labelSuffix }</Fragment>,
        style: {
          left: 'auto',
          marginRight: '-7px',
          marginLeft: 0,
          width: 'auto',
        },
      },
    }

    return (
      <RangeWrapper display={this.props.display} innerRef={this.setWrapper}>
        {this.props.label && (
          <Label fontSize={2} is="label">
            {this.props.label}
          </Label>
        )}

        <RangeSelected onClick={this.toggleRangeBox}>
          { this.state.min }
          -
          { this.state.max }

          <Icon icon="chevron-down" />
        </RangeSelected>

        { this.state.isRangeBoxActive && (
          <RangeBox
            align={ this.props.align }
            bg="white"
            pb={2}
            px={4}
            pt={3}
            w={[1, 'calc(200% + 32px)', 'calc(200% + 48px)']}
          >
            <Range
              allowCross={false}
              defaultValue={[this.props.min, this.props.max]}
              max={this.props.max}
              min={this.props.min}
              marks={ marks }
              onChange={ this.onRangeUpdate }
            />
          </RangeBox>
        )}
      </RangeWrapper>
    )
  }
}

RangeSelect.defaultProps = {
  labelPrefix: null,
  labelSuffix: null,
  min: 0,
  max: 9999,
}