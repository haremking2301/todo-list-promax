import './App.scss';
import SearchComponent from './Components/Search/Search';
import { Col, Row } from 'antd';
import SibarComponent from './Components/Sidebar/Sibar';
import { Route, Routes } from 'react-router-dom';
import AllTaskPage from './Pages/AllTask/Alltask';
import NewTaskPage from './Pages/NewTask/NewTask';
import DoingTaskPage from './Pages/DoingTask/DoingTask';
import DoneTaskPage from './Pages/DoneTask/DoneTask';
import { APP_ROUTES } from './constant/routes';
import AddTask2Page from './Pages/AddTask/AddTask2';

function App() {
  return (
    <div className="App">
      <SearchComponent></SearchComponent>
      <Row>
        <Col className='left' span={4}>
          <SibarComponent></SibarComponent>
        </Col>
        <Col className='right' span={20}>
          <Routes>
            <Route path={APP_ROUTES.ADD_TASK} element={<AddTask2Page></AddTask2Page>}></Route>
            <Route path={APP_ROUTES.ALL_TASK} element={<AllTaskPage></AllTaskPage>}></Route>
            <Route path={APP_ROUTES.NEW_TASK} element={<NewTaskPage></NewTaskPage>}></Route>
            <Route path={APP_ROUTES.DOING_TASK} element={<DoingTaskPage></DoingTaskPage>}></Route>
            <Route path={APP_ROUTES.DONE_TASK} element={<DoneTaskPage></DoneTaskPage>}></Route>
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
