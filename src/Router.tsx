import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
    return (
        <Routes>
            <Route>
                {/* <Route path='' element={</>}/> */}
                <Route path='/' element={<Home />} />
                <Route path='/history' element={<History />} />
            </Route>
        </Routes>
    )
}