import React from 'react'
import Content from '@nexys/components/Content/Content'
import { Col, Divider, Row } from 'antd'
import Avatar from './components/Avatar'
import Education from './components/Education'
import NameJobsDescription from './components/NameJobsDescription'
import TechStack from './components/TechStack'
import WorkExperiences from './components/WorkExperiences'

export default function Resume() {
  return (
    <Content className="border-yellow-500 border py-4 text-fontPrimary">
      <Row className="flex flex-1 flex-col lg:flex-row items-center">
        <Col xs={6} md={6} sm={24} className="flex-1">
          <Avatar />
        </Col>
        <Col xs={18} md={18} sm={24} className="flex-1 justify-start">
          <NameJobsDescription />
        </Col>
      </Row>
      <Divider />
      <Row className="flex-1">
        <Education />
      </Row>
      <Divider />
      <Row className="flex-1">
        <WorkExperiences />
      </Row>
      <Divider />
      <Row className="flex justify-center">
        <TechStack />
      </Row>
    </Content>
  )
}
