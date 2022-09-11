/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { MdEmail, MdPermPhoneMsg } from 'react-icons/md'

const { Title } = Typography

export default function NameJobsDescription() {
  return (
    <Row className="flex-col flex-1 pt-4 pl-0 lg:pl-8">
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
      <Row className="items-center">
        <Col>
          <Typography.Paragraph className="text-center text-fontPrimary sm:text-justify">
            Hi, i`am Ari a Full Stack developer from Tegal, Indonesia. I build
            web apps and mobile apps that provide intuitive and pixel-perfect
            user interfaces and familiar with React. Every day at work i used TS
            with Next JS currently, I'am still learning Typescript, Docker etc
          </Typography.Paragraph>
        </Col>
        <Col className="items-center flex-1 flex-row">
          <Typography.Title
            level={5}
            className="text-center text-fontPrimary flex items-center justify-center"
          >
            <GoLocation className="mr-4" />
            Tegal, Central Java, Indonesia
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col className="items-center flex-1 flex-row">
          <Typography.Title
            level={5}
            className="text-center text-fontPrimary flex items-center justify-center"
          >
            <MdEmail className="mr-4" />
            ariabghufron@gmail.com
          </Typography.Title>
        </Col>
        <Col className="items-center flex-1 flex-row">
          <Typography.Title
            level={5}
            className="text-center text-fontPrimary flex items-center justify-center"
          >
            <MdPermPhoneMsg className="mr-4" />
            +62 831-1372-9917
          </Typography.Title>
        </Col>
      </Row>
    </Row>
  )
}
