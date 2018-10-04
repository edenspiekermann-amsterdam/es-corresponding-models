import Head from 'next/head'

  // For all <head> elements, See also pages/_document.js
  export const AppHead = props => (
  <Head>
    <title>{props.title}</title>
  </Head>
)
