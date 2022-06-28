import Content from '@nexys/components/Content/Content'
import { Row } from 'antd'
import React from 'react'
import Avatar from './components/Avatar'
import NameJobsDescription from './components/NameJobsDescription'

export default function Resume() {
  return (
    <Content className="border-yellow-500 border py-4 text-fontPrimary">
      <Row className="flex-1">
        <Avatar />
        <NameJobsDescription />
      </Row>
    </Content>
  )
}
