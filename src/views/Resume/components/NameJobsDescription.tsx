import { Col, Row, Typography } from 'antd'
import React from 'react'
import { GoLocation } from 'react-icons/go'

const { Title } = Typography

export default function NameJobsDescription() {
  return (
    <Row className="flex-col flex-1 pt-4 pl-8">
      <Row className="flex-col">
        <Col>
          <Title className="text-fontSecondary mb-0" level={2}>
            Ari Abdurrahman Ghufron
          </Title>
        </Col>
        <Col>
          <Title className="text-fontSecondary" level={3}>
            FullStack Developer
          </Title>
        </Col>
      </Row>
      <Row className=" items-center">
        <Col>
          <Typography.Paragraph className="text-center text-fontPrimary">
            Hi, i`am Ari a junior front-end developer from Tegal, Indonesia. I
            build web apps and mobile apps that provide intuitive and
            pixel-perfect user interfaces and familiar with React. I`am have a
            dream be CEO or build startup
          </Typography.Paragraph>
        </Col>
        <Col>
          <Typography.Text className="text-center text-fontPrimary">
            <GoLocation />
          </Typography.Text>
        </Col>
      </Row>
    </Row>
  )
}
