import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomepagePage from "../../pages/HomepagePage.component"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<HomepagePage />} />
                <Route path="*" element={<Navigate to="/homepage" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter