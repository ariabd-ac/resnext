/* eslint-disable react/jsx-one-expression-per-line */
import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { ImOffice } from 'react-icons/im'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineDateRange } from 'react-icons/md'
import data from '../../../../public/data/data.json'

const { Title } = Typography

export default function WorkExperiences() {
  useEffect(() => {
    console.log('=>', data)
  }, [])

  return (
    <Row className="flex flex-col">
      <Row className="items-center flex-1">
        <Col>
          <Title className="text-fontSecondary px-4 pt-4" level={4}>
            WORK EXPERIENCES
          </Title>
        </Col>
      </Row>
      <Row className="px-4">
        {data?.result?.workExperiences
          .sort((a: any, b: any) => b.id - a.id)
          // .slice(0, 5) // enable if you not limit
          .map((d: any) => {
            return (
              <Row className="flex flex-col" key={d?.role}>
                <Col className="flex items-start">
                  <ImOffice className="mr-2" size={20} />
                  <Title level={5}>{d?.company}</Title>
                </Col>
                <Row>
                  <Col className="pr-2 flex items-start">
                    <BsPerson className="mr-2" size={20} />
                    <Typography.Text>{d?.role} </Typography.Text>
                  </Col>
                  <Col className="flex items-start">
                    <MdOutlineDateRange className="mr-2" size={20} />
                    <Typography.Text>{d?.period}</Typography.Text>
                  </Col>
                </Row>
                <Col>
                  <Typography.Paragraph className="text-fontPrimary">
                    {d?.description}
                  </Typography.Paragraph>
                </Col>
              </Row>
            )
          })}
      </Row>
    </Row>
  )
}
