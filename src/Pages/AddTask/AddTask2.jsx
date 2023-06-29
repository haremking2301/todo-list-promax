import '../AddTask/style.scss';
import { Col, Row, Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postTasksThunk } from '../../Redux/reducers/getTaskReducer';
import { format } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function AddTask2Page() {
    const form1 = {
        title: '',
        creator: '',
        created: new Date(),
        description: '',
        status: '',
    }
    const [form, setForm] = useState({
        title: '',
        creator: '',
        created: '',
        description: '',
        status: '',
    })
    const schema = yup.object()
    .shape({
        title: yup.string().required('Please enter a title'),
        creator: yup.string().required('Please enter a creator'),
        description: yup.string().required('Please enter a description'),
    })

    const methods = useForm({
        defaultValues: {
            title: '',
            creator: '',
            created: new Date(),
            description: '',
            status: '',
        },
        resolver: yupResolver(schema),
    })

    console.log(methods)
    const { handleSubmit, control, formState: { errors }, reset } = methods;

    const onValids = function(data) {
        setIsSave(!isSave)
        setForm(data)
    }

    const handleSave = function() {
        dispatch(postTasksThunk(form))
        reset(form1)
    }

    const handleChange = function(e) {
        setForm({
            ...form,
            status: e.target.value
        })
    }

    const handleReset = function() {
        reset(form1)
    }

    const handleDelete = function() {
        reset(form1)
        setIsSave(!isSave)
    }

    const dispatch = useDispatch()
    const [isSave, setIsSave] = useState(false)

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
                    <div>
                    <Controller
                        control={control}
                        name='title'
                        render={({field}) => {
                            return <input type='text' name='title' {...field} placeholder='Please enter your title'></input>
                        }}
                    ></Controller>
                    {!!errors.title?.message && <span className='err'>{errors.title?.message}</span>}
                    </div>
                    <Controller
                        control={control}
                        name='creator'
                        render={({field}) => {
                            return <input type='text' name='creator' {...field} placeholder='Please enter your creator'></input>
                        }}
                    ></Controller>
                    {!!errors.creator?.message && <span className='err'>{errors.creator?.message}</span>}
                    <Controller
                        control={control}
                        name='created'
                        render={({field}) => {
                            return <input disabled value={format(field.value, 'yyyy-MM-dd HH:mm')}></input>
                        }}
                    ></Controller>
                    <Controller
                        control={control}
                        name='description'
                        render={({field}) => {
                            return <input type='text' name='description' {...field} placeholder='Please enter your title'></input>
                        }}
                    ></Controller>
                    {!!errors.description?.message && <span className='err'>{errors.description?.message}</span>}
                </Col>
            </Row>
            <Row justify={'center'}>
                <Button type="primary" className={isSave? 'hiden' : 'unhiden'} onClick={handleSubmit(onValids)}>Save</Button>
            </Row>
            <Row justify={'center'} align="middle">
                    <Controller
                        control={control}
                        name='status'
                        render={({field}) => {
                            return <input onChange={handleChange} name="status" type="radio" value="new" className={'btnc '+ (isSave? 'unhiden' : 'hiden')}/>
                        }}
                    ></Controller>
                    <span className={'btnc '+ (isSave? 'unhiden' : 'hiden')}>New</span>
                    <Controller
                        control={control}
                        name='status'
                        render={({field}) => {
                            return <input onChange={handleChange} name="status" type="radio" value="doing" className={'btnc '+ (isSave? 'unhiden' : 'hiden')}/>
                        }}
                    ></Controller>
                    <span className={'span '+ (isSave? 'unhiden' : 'hiden')}>Doing</span>
                    <Controller
                        control={control}
                        name='status'
                        render={({field}) => {
                            return <input onChange={handleChange} name="status" type="radio" value="done" className={'btnc '+ (isSave? 'unhiden' : 'hiden')}/>
                        }}
                    ></Controller>
                    <span className={'btnc '+ (isSave? 'unhiden' : 'hiden')}>Done</span>
            </Row>
            <Row justify={'center'}>
                <Button type="primary" onClick={handleSave} className={'btn '+ (isSave? 'unhiden' : 'hiden')}>Save</Button>
                <Button type="primary" onClick={handleReset} className={'btn '+ (isSave? 'unhiden' : 'hiden')} >Reset</Button>
                <Button type="primary" onClick={handleDelete} className={'btn '+ (isSave? 'unhiden' : 'hiden')}>Delete</Button>
            </Row>
        </div>
    )
}

export default AddTask2Page