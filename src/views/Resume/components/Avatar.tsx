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
            src="https://media-exp1.licdn.com/dms/image/C4E03AQF97ThoHPzTMA/profile-displayphoto-shrink_200_200/0/1658839197481?e=1665014400&v=beta&t=MbPtxMaKj8sPcdwfMWGzYY3vhVSDXz0k_SxSDbuq5UI"
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
