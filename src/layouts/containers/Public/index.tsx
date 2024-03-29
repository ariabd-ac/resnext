import { BackTop } from 'antd'
import Head from 'next/head'
import { ReactComponentLike } from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'

interface IProps {
  Component: ReactComponentLike
  pageProps: any
}

function PublicContainer(props: IProps) {
  const { Component, pageProps } = props
  const refHeader = useRef<HTMLElement>()
  const refFooter = useRef<HTMLElement>()
  const [heightHeaderFooter, setHeightHeaderFooter] = useState(0)

  useEffect(() => {
    if (refFooter.current && refHeader.current) {
      const headerHeight = refHeader.current?.clientHeight
      const footerHeight = refFooter.current?.clientHeight
      setHeightHeaderFooter(headerHeight + footerHeight)
    }
  }, [Boolean(refHeader.current), Boolean(refFooter.current)])

  return (
    // <div>
    <div
      style={{
        minHeight: `calc(100vh - ${heightHeaderFooter}px)`,
      }}
    >
      <Head>
        <title>Ari Abdurrahman Ghufron</title>
        <meta name="keywords" content="Ari Abdurrahman Ghufron" />
      </Head>
      <Component {...pageProps} />
    </div>

    // <BackTop duration={50} />
    // </div>
  )
}

export default PublicContainer
