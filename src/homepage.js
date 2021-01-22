import {loadHeader} from './header';
import {loadNavBar} from './navBar';
import {loadMain} from './mainSection';

export const loadHomePage = () => {

    const body = document.createElement("div");
    body.appendChild(loadHeader());
    body.appendChild(loadNavBar());
    body.appendChild(loadMain());

    return body;

}
