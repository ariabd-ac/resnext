import { Col, Image, Row, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export default function Avatar() {
  return (
    <React.Fragment>
      <Row className="flex-col items-center">
        <Col>
          <Image
            className="rounded-full"
            preview={false}
            style={{ objectFit: 'contain' }}
            src="https://media-exp2.licdn.com/dms/image/C5603AQGu4-6fmpbfdA/profile-displayphoto-shrink_200_200/0/1628667315488?e=1661990400&v=beta&t=smm1BHtz9nhqGTmSVcLUdelgYHtUKYBmZoKmxlfDJZE"
          />
        </Col>
        <Col className="mt-4">
          <Title className="text-fontPrimary" level={5}>
            An. Ari
          </Title>
        </Col>
      </Row>
    </React.Fragment>
  )
}
