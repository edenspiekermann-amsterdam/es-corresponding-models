import { createElement } from 'react'
import marksy from 'marksy'

import { Box } from './layout'
import { Image } from '../primitives/image/image'
import { Text, H3, H4, Paragraph } from './typography'

export const compileMarkdown = marksy({
  // Pass in whatever creates elements for your
  // virtual DOM library. h('h1', {})
  createElement: createElement,

  // You can override the default elements with
  // custom VDOM trees
  elements: {
    h1({ id, children }) {
      return <H3 textStyle="sectionHeading">{children}</H3>
    },

    h2({ id, children }) {
      return <H4 textStyle="sectionHeading">{children}</H4>
    },

    h3({ id, children }) {
      return (
        <H4 is="h5" textStyle="fancy">
          {children}
        </H4>
      )
    },

    p({ children }) {
      return <Text>{children}</Text>
    },

    // h4({ id, children }) {},

    blockquote({ children }) {},

    hr() {},

    ol({ children }) {
      return (
        <Text>
          <ul>{children}</ul>
        </Text>
      )
    },

    ul({ children }) {
      return (
        <Text>
          <ul>{children}</ul>
        </Text>
      )
    },

    table({ children }) {
      return null
    },

    thead({ children }) {},

    tbody({ children }) {},

    tr({ children }) {},

    th({ children }) {},

    td({ children }) {},

    a({ href, title, target, children }) {
      return (
        <a href={href} target={target} title={title}>
          {children}
        </a>
      )
    },

    strong({ children }) {
      return <strong>{children}</strong>
    },

    em({ children }) {
      return <em>{children}</em>
    },

    br() {},

    del({ children }) {},

    img({ src, alt }) {
      return <Image my={4} src={src} alt={alt} />
    },

    code({ language, code }) {},

    codespan({ children }) {},
  },
})
