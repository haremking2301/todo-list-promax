import '../AddTask/style.scss';
import { Col, Row, Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postTasksThunk } from '../../Redux/reducers/getTaskReducer';

function AddTask1Page() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        title: '',
        creator: '',
        created: '',
        description: '',
        status: '',
    })
    const [isSave, setIsSave] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const handleOnChange = function (event) {
        const name = event.target.name
        const value = event.target.value
        setForm({
            ...form,
            [name]: value,
        })
    }
    const handleSave = function() {
        if(form.title === '' || form.creator === '' || form.created === '' || form.description === '') {
            setIsValid(true)
        } else {
            setIsValid(false)
            setIsSave(!isSave)
        }
    }
    const handleDelete = function() {
        setForm({
            title: '',
            creator: '',
            created: '',
            description: '',
            status: '',
        })
    }
    const handleReset = function() {
        setForm({
            id: Math.random(),
            title: '',
            creator: '',
            created: '',
            description: '',
            status: '',
        })
        setIsSave(!isSave)
    }
    const handleSubmit = function() {
        if (form.status === '') {
            setIsValid(true)
        } else {
            setIsValid(false)
            dispatch(postTasksThunk(form))
            handleDelete()
        }
    }
    return (
        <div className='containerha'>
            <Row justify={'center'}><h1>Add Your Mission</h1></Row>
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
                    <input type='text' name='title' onChange={handleOnChange} value={form.title}></input>
                    <input type='text' name='creator' onChange={handleOnChange} value={form.creator}></input>
                    <input type='text' name='created' onChange={handleOnChange} value={form.created}></input>
                    <input type='text' name='description' onChange={handleOnChange} value={form.description}></input>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Button type="primary" className={isSave? 'hiden' : 'unhiden'} onClick={handleSave}>Save</Button>
            </Row>
            <Row justify={'center'} align="middle">
                    <input name="status" type="radio" value="new" className={'btnc '+ (isSave? 'unhiden' : 'hiden')} onChange={handleOnChange}/>
                    <span className={'btnc '+ (isSave? 'unhiden' : 'hiden')}>New</span>
                    <input name="status" type="radio" value="doing" className={'btnc '+ (isSave? 'unhiden' : 'hiden')} onChange={handleOnChange}/>
                    <span className={'span '+ (isSave? 'unhiden' : 'hiden')}>Doing</span>
                    <input name="status" type="radio" value="done" className={'btnc '+ (isSave? 'unhiden' : 'hiden')} onChange={handleOnChange}/>
                    <span className={'btnc '+ (isSave? 'unhiden' : 'hiden')}>Done</span>
            </Row>
            <Row justify={'center'}>
                <Button type="primary"  className={'btn '+ (isSave? 'unhiden' : 'hiden')} onClick={handleSubmit}>Save</Button>
                <Button type="primary"  className={'btn '+ (isSave? 'unhiden' : 'hiden')} onClick={handleReset}>Reset</Button>
                <Button type="primary"  className={'btn '+ (isSave? 'unhiden' : 'hiden')} onClick={handleDelete}>Delete</Button>
            </Row>
            <Row justify={'center'}>
                <h2 className={'invalid '+ (isValid? 'fill' : '')}>Please enter all fields</h2>
            </Row>
        </div>
    )
}

export default AddTask1Page