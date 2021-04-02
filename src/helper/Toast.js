import React from "react";
import 'react-toastify/dist/ReactToastify.css';

export function ErrorToast(props) {
    return (
        <>
            <div className="float-left">
                <img alt="" src={process.env.PUBLIC_URL + "/assets/msg_alert.svg"} width="18" height="18" className="d-inline-block align-top mx-3" />
            </div>
            <div className="float-left w-75">
                <span>{props.message}</span>
            </div>
        </>
    )
}

export function SuccessToast(props) {
    return (
        <>
            <div className="float-left mt-1">
                <img alt="" src={process.env.PUBLIC_URL + "/assets/msg_ok.svg"} width="15" height="15" className="d-inline-block align-top mx-3" />
            </div>
            <div className="float-left w-75">
                <span>{props.message}</span>
            </div>
        </>
    )
}


