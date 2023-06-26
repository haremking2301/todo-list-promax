import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
import { Divider } from 'antd';
import { Pagination } from 'antd';
import { useSelector} from 'react-redux'
import { getTasks } from '../../Redux/reducers/getTaskReducer';

function AllTaskPage() {
  useEffect(() => {
    getTasks()
  })

  const dataAllTasks = useSelector((state) => state.getTasks.dataTasks)
  console.log(dataAllTasks)

  return (
    <div className='containerha'>
      <Row gutter={24} justify="space-between">
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider />
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider />
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col >
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider />
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status new'>Status: New</p>
            <Divider />
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider/>
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider/>
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider/>
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
        <Col span={6} className="gutter-row">
          <div className='taskitem'>
            <p className='taskitem__title'>Title: Task1</p>
            <p className='taskitem__creator'>Creator: Toan</p>
            <p className='taskitem__status'>Status: New</p>
            <Divider/>
            <p className='taskitem__des'>Description</p>
            <p className='taskitem__detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          </div>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col offset={10} span={16}><Pagination defaultCurrent={1} total={50} /></Col>
      </Row>
    </div>
  )
}

export default AllTaskPage