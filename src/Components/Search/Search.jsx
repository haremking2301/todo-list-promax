import React from 'react'
import '../Search/style.scss';
import { Button } from 'antd';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constant/routes';

function SearchComponent() {
    return (
        <div className='search'>
            <Row justify={'space-around'}>
                <Col span={4} offset={2}><Button type="primary"><Link to={APP_ROUTES.ADD_TASK}>Create New Task</Link></Button></Col>
                <Col span={6} offset={6}><Input placeholder="Type something to search" /></Col>
                <Col span={5} offset={1}><Button type="dashed">Search</Button></Col>
            </Row>
        </div>
    )
}

export default SearchComponent