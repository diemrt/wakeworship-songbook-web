import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AddSongPage from "../../pages/AddSongPage/AddSongPage.component"
import SongDetailPage from "../../pages/SongDetailPage/SongDetailPage.component"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../redux/auth/auth.selectors"
import LoginPage from "../../pages/LoginPage/LoginPage.component"
import LoginForm from "../forms/LoginForm/LoginForm.component"

const AppRouter = () => {
    const userLoggedIn = useSelector(selectCurrentUser) ? true : false
    
    return (
        <BrowserRouter>
            <Routes>
                {userLoggedIn ? (
                    <Routes>
                        <Route path="/add" element={<AddSongPage />} />
                        <Route path="/songs/:songId" element={<SongDetailPage />} />
                        <Route path="*" element={<Navigate to="/add" replace />} />
                    </Routes>
                ) : (
                    <Route path="/" element={<LoginPage />}>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter