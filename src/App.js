import { HashRouter as Router, Route, Routes } from "react-router-dom"
import DesktopComponent from "./components/DesktopComponent"
import About from "./pages/About"
import Error from "./pages/Error"
import Projects from "./pages/Projects"
function App() {
    return (
        <div className="App h-screen w-full">
            <div className="h-full w-full overflow-x-hidden bg-[#010C1B] text-white">
                <Router>
                    <Routes>
                        <Route path="/" element={<DesktopComponent />} />
                        <Route path="*" element={<DesktopComponent />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App
