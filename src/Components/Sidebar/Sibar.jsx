import { Link } from 'react-router-dom';
import React from 'react';
import '../Sidebar/style.scss';
import { APP_ROUTES } from '../../constant/routes';


const SibarComponent = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><Link to={APP_ROUTES.ALL_TASK}>All Task</Link></li>
                <li><Link to={APP_ROUTES.NEW_TASK}>New Task</Link></li>
                <li><Link to={APP_ROUTES.DOING_TASK}>Doing Task</Link></li>
                <li><Link to={APP_ROUTES.DONE_TASK}>Done Task</Link></li>
            </ul>
        </div>
    )
}

export default SibarComponent