import React, { useState } from 'react'
import '../Search/style.scss';
import { Button } from 'antd';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constant/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksThunk, searchTasksReducerFunction} from '../../Redux/reducers/getTaskReducer';

function SearchComponent() {
    const pagenumber = useSelector((state) => state.getTasks.pagenumber)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const handleChangeSearch = function(e) {
        setSearch(e.target.value)
    }
    const handleSearch = function() {
        dispatch(searchTasksReducerFunction(search))
        dispatch(getTasksThunk({
            q: search,
            _limit: 8,
            _page: pagenumber
        }))
    }

    return (
        <div className='search'>
            <Row justify={'space-around'}>
                <Col span={4} offset={2}><Button type="primary"><Link to={APP_ROUTES.ADD_TASK}>Create New Task</Link></Button></Col>
                <Col span={6} offset={6}><Input placeholder="Type something to search" onChange={handleChangeSearch} value={search}/></Col>
                <Col span={5} offset={1}><Button type="dashed" onClick={handleSearch}>Search</Button></Col>
            </Row>
        </div>
    )
}

export default SearchComponent