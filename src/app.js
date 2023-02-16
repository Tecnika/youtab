import handleSubmit from './handles/handlessubmit';
import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/work_components/auth/login"
import Register from "./components/work_components/auth/register"
import Reset from "./components/work_components/auth/reset"
import Dashboard from "./components/work_components/auth/dashboard"

function App() {
    const dataRef = useRef()

    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    return (
        <>
            <div className="App">
                <form onSubmit={submithandler}>
                    <input type="text" ref={dataRef} />
                    <button type="submit">Save</button>
                </form>
            </div>
            <div className="app">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Login/>} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/reset" element={<Reset />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>

            </div></>
    );
}

export default App;