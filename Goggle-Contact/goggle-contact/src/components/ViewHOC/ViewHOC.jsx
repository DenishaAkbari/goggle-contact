import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoginForm from "../../components/login/login";
import { loginRec } from "../../Service/Action/loginAction";

const ViewHOC = (WrappedComponent) => {
    return ({props}) => {

        const dispatch = useDispatch();
        const { isLogin, user } = useSelector((state) => state.loginFormReducer);

        useEffect(() => {

            const userDataForLogin = localStorage.getItem("user");

            if (userDataForLogin) {
                dispatch(loginRec(userDataForLogin));
            }
            
        }, [dispatch]);

        if (isLogin && user) { 

            return <WrappedComponent />;
        } else {

            return <LoginForm {...props}/>;
        }
    };
};

export default ViewHOC;