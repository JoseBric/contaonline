import React, {Fragment} from 'react';
import UserLinksPortal from "./UserLinksPortal";

export default function NavLinks(props) {
    return (
        <Fragment>
        <UserLinksPortal>
            <a href="none" className={props.linkActive("dropdown-item navLink", "/profile")} onClick={e=>{props.fakeLink(e,"/profile")}}><i className="ti-user"></i> My Profile</a>
        </UserLinksPortal>
        <UserLinksPortal>
            <a href="none" className={props.linkActive("dropdown-item navLink", "/balance")} onClick={e=>{props.fakeLink(e,"/balance")}}><i className="ti-wallet"></i> My Balance</a>
        </UserLinksPortal>
        <UserLinksPortal>
            <a href="none" className={props.linkActive("dropdown-item navLink", "/settings")} onClick={e=>{props.fakeLink(e,"/settings")}}><i className="ti-settings"></i> Account Setting</a>
        </UserLinksPortal>
        </Fragment>
    )
}