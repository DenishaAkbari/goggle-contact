import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import View from './components/main-body/View'
import ContatcForm from './components/Form/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router' 
import EditData from './components/Edit/Edit'
import ViewHOC from './components/ViewHOC/ViewHOC'
import LoginForm from './components/login/login'

const MyLogin = ViewHOC(View)
function App() {
  return (
    <>
    <Sidebar />
    <Header />
      <Routes>
        {/* <Route path='/' element={<Sidebar/>} /> */}

        <Route path='/' element={<MyLogin/>} />
        
        <Route path='/contactform' element={<ContatcForm/>} />
        <Route path='/edit' element={<EditData />} />
        <Route path='/login' element={<LoginForm/>} />
      </Routes>
      <View />
    </>
  )
}

export default App