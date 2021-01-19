import {loadHeader} from './header';
import {loadNavBar} from './navBar';

export const loadHomePage = () => {

    const body = document.createElement("div");
    body.appendChild(loadHeader());
    body.appendChild(loadNavBar());

    return body;

}
