import { Fragment } from 'react'
import styled from 'styled-components'

import { css } from 'styled-components'
import { Row, Column } from '../../app/layout'

import { Label, Paragraph, Link } from '../../app/typography'
import { Image } from '../../primitives/image/image'
import { themeGet } from 'styled-system'

export const PersonWrapper = styled(Row)`
  align-items: center;
  border-top: solid 1px ${themeGet('colors.swirl', 'lightgrey')};
  ${props =>
    props.view != 'compact' &&
    css`
      border-bottom: solid 1px ${themeGet('colors.swirl', 'lightgrey')};
    `};
`

export const PersonAvatar = styled.div`
  picture {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 35px;
  }
  img {
    width: 70px;
    height: auto;
  }
`

export const PersonEmail = styled(Column)`
  display: flex;
  justify-content: flex-end;
  a,
  span {
    width: 100%;
  }
  ${props =>
    props.view == 'compact' &&
    css`
      flex: 1 1 100%;
      width: 100%;
      span {
        margin-top: 1rem;
      }
    `};
`

export const ContactPersonView = props => {
  return (
    <PersonWrapper
      py={4}
      px={props.px || [2, 2, 0]}
      my={4}
      view={props.view || null}
      mx={props.mx || null}
    >
      <Column gutter={2} w={props.view == 'compact' ? [3/12, 2/12, 4/12] : [4 / 12, 2 / 12, 2 / 12]}>
        <PersonAvatar gutter={0}>
          <Image
            src={props.contact.imageUrl + '?h=140&w=140&fit=thumb&f=face'}
          />
        </PersonAvatar>
      </Column>

      <Column gutter={2} w={props.view == 'compact' ? [9/12, 10/12, 8/12] : [8 / 12, 6 / 12, 6 / 12]}>
        <Label>{props.contact.name}</Label>

        {(props.contact.functionTitle || props.contact.phoneNumber) && (
          <Paragraph my={0} textStyle="light">
            {props.contact.functionTitle}
            {props.contact.phoneNumber && (
              <Fragment>
                <br />
                {props.contact.phoneNumber}
              </Fragment>
            )}
          </Paragraph>
        )}
      </Column>

      {props.contact.emailAddress && (
        <PersonEmail
          flex="1 1 auto"
          w={[1, 4 / 12, 4 / 12]}
          mt={[3, 0, 0]}
          view={props.view || null}
          gutter={0}
        >
          <a href={'mailto:' + props.contact.emailAddress + '?cc=info@vci.nl'}>
            <Link buttonStyle="primary" w={'100%'}>
              Stuur een e-mail
            </Link>
          </a>
        </PersonEmail>
      )}
    </PersonWrapper>
  )
}
