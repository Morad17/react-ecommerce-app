import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Shop" element={<Shop/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
