import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import { Divider } from 'antd';
import { Pagination } from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import { getTasksThunk, pagenumberReducerFunction } from '../../Redux/reducers/getTaskReducer';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function AllTaskPage() {
  const search = useSelector((state)=> state.getTasks.search)
  const totalPages = useSelector((state)=> state.getTasks.totalPages)

  const antIcon = <LoadingOutlined className='loading' style={{ fontSize: 36 }} spin />;
  const [page, setPage] = useState({
    crp: 1,
    limit: 8,
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksThunk({
      _page: page.crp,
      _limit: page.limit,
      q: search
    }))
  }, [page.crp])

  const handleChangePage = (number) => {
    dispatch(pagenumberReducerFunction(number))
    setPage({
      ...page,
      crp: number
    })
  }

  const dataAllTasks = useSelector((state) => state.getTasks.dataTasks)
  const isLoading = useSelector((state) => state.getTasks.isLoading)

  return (
    <div className='containerha'>
      <Row justify={'center'} align="middle">
        {isLoading ? <Spin indicator={antIcon} /> : <></>}
      </Row>
      <Row gutter={24} justify="start">
        {dataAllTasks.map(function (task) {
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
      <Row justify={'center'}>
        <Col offset={10} span={16}>
          <Pagination 
            total={totalPages}
            defaultPageSize={page.limit}
            pageSize={page.limit}
            defaultCurrent={page.crp} 
            current={page.crp}
            onChange={handleChangePage} />
        </Col>
      </Row>
    </div>
  )
}

export default AllTaskPage