/* eslint-disable react/jsx-one-expression-per-line */
import { Col, Row, Typography } from 'antd'
import { FaUniversity, FaUserGraduate } from 'react-icons/fa'
import { MdOutlineDateRange } from 'react-icons/md'
import data from '../../../../public/data/data.json'

const { Title } = Typography

export default function Education() {
  return (
    <Row className="flex flex-col w-full">
      <Row className="items-center flex-1">
        <Col>
          <Title className="text-fontSecondary px-4 pt-4" level={4}>
            EDUCATION HISTORY
          </Title>
        </Col>
      </Row>
      <Row className="px-4 flex-col">
        {data?.result?.historyEducation
          .sort((a: any, b: any) => b.id - a.id)
          // .slice(0, 5) // enable if you not limit
          .map((d: any) => {
            return (
              <Row className="flex flex-col py-2" key={d?.id}>
                <Col className="flex items-start">
                  <FaUniversity className="mr-2" size={20} />
                  <Title level={5}>{d?.company}</Title>
                </Col>
                <Row>
                  <Col className="pr-2 flex items-start">
                    <FaUserGraduate className="mr-2" size={20} />
                    <Typography.Text>{d?.role} </Typography.Text>
                  </Col>
                  <Col className="flex items-start">
                    <MdOutlineDateRange className="mr-2" size={20} />
                    <Typography.Text>{d?.period}</Typography.Text>
                  </Col>
                </Row>
              </Row>
            )
          })}
      </Row>
    </Row>
  )
}
