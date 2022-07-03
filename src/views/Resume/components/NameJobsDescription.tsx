/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { GoLocation } from 'react-icons/go'
// import {
//   FaCss3Alt,
//   FaDocker,
//   FaNodeJs,
//   FaPhp,
//   FaReact,
//   FaYarn,
// } from 'react-icons/fa'
// import { FcLinux } from 'react-icons/fc'
// import { IoLogoJavascript } from 'react-icons/io'
// import { SiNextdotjs } from 'react-icons/si'

import data from '../../../../public/data/data.json'

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
      <Row className="items-center">
        <Col>
          <Typography.Paragraph className="text-center text-fontPrimary">
            Hi, i`am Ari a Full Stack developer from Tegal, Indonesia. I build
            web apps and mobile apps that provide intuitive and pixel-perfect
            user interfaces and familiar with React. Every day at work i used TS
            & Next bug currently, I'am still learning Typescript, Docker etc
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
        <Col />
      </Row>
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
    </Row>
  )
}
