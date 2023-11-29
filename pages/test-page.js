import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Principal Operations Associate</title>
          <meta
            property="og:title"
            content="test-page - Principal Operations Associate"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_4w283k) => (
            <>
              <h1>{context_4w283k?.Name}</h1>
            </>
          )}
          initialData={props.context4w283kProp}
          persistDataDuringLoading={true}
          key={props?.context4w283kProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context4w283kProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context4w283kProp: context4w283kProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
