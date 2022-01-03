import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Shop" element={<Shop/>} />
                    <Route path="/ProductPage" element={<ProductPage/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
