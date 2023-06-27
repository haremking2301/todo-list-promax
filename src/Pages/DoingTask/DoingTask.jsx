import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDoingTasksThunk } from '../../Redux/reducers/getDoingTask';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

function DoingTaskPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoingTasksThunk());
  }, [])

  const dataDoingTasks = useSelector((state) => state.getDoingTasks.dataDoingTasks)

  return (
    <div className='containerha'>
      <Row gutter={24} justify="start">
        {dataDoingTasks.map(function (task) {
          const status = `${task.status}`
          return <Col span={6} className="gutter-row" key={task.id}>
                    <div className='taskitem'>
                      <p className='taskitem__title'>Title: {task.title}</p>
                      <p className='taskitem__creator'>Creator: {task.creator}</p>
                      <p className={'taskitem__status '+ status}>Status: {task.status}</p>
                      <Divider />
                      <p className='taskitem__des'>Description</p>
                      <p className='taskitem__detail'>{task.description}</p>
                    </div>
                </Col>
        })}
      </Row>
    </div>
  )
}

export default DoingTaskPage