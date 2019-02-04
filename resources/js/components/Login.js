import React from "react";
import abb from "../../views/auth/login.html";
import renderHTML from 'react-render-html';

const unescaped = unescape(abb)
function Login() {
    return(
        <React.Fragment>
            {renderHTML(unescaped)}
        </React.Fragment>
    )
}

export default Login