import { Outlet } from "react-router-dom";
import LoginSidebar from "../../components/LoginSidebar/LoginSidebar.component"
import TwLoginWrapper from "./style";

const LoginPage = () => {

    return(
        <TwLoginWrapper>
            <Outlet />                  
            <LoginSidebar/>
        </TwLoginWrapper>
    )
}

export default LoginPage