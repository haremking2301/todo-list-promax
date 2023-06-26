import '../AddTask/style.scss';
import { Col, Row, Button } from 'antd'
import React from 'react'

function AddTask1Page() {
    return (
        <div className='containerha'>
            <Row align="middle">
                <Col span={6}>
                </Col>
                <Col span={4}>
                    <p>Title: </p>
                    <p>Creator: </p>
                    <p>Created at: </p>
                    <p>Description: </p>
                </Col>
                <Col span={12}>
                    <input type='text' name='title'></input>
                    <input type='text' name='creator'></input>
                    <input type='text' name='created'></input>
                    <input type='text' name='description'></input>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Button type="primary">Save</Button>
            </Row>
        </div>
    )
}

export default AddTask1Page