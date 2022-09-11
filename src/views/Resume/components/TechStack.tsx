/* eslint-disable jsx-a11y/alt-text */
import { Col, Row } from 'antd'
import React from 'react'
import data from '../../../../public/data/data.json'

export default function TechStack() {
  return (
    <Row className="justify-center">
      <Col
        style={{ maxWidth: '80%' }}
        className="flex flex-row flex-1 justify-center flex-wrap mb-4"
      >
        {data?.result?.techStack?.map((v: any) => {
          return <img className="mr-2 mt-2 h-8" src={v?.src} />
        })}
      </Col>
    </Row>
  )
}
