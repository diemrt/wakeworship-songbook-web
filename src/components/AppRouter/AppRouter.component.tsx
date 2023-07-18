import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AddSongPage from "../../pages/AddSongPage/AddSongPage.component"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/add" element={<AddSongPage />} />
                <Route path="*" element={<Navigate to="/add" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter