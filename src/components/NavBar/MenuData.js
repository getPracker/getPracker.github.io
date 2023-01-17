import ROUTES from "../../app/routes";
const menuData = [
    {
        name: "Home",
        url: ROUTES.homeRoute(),
        cName: "nav-link"
    },
    {
        name: "About",
        url: ROUTES.aboutRoute(),
        cName: "nav-link"
    },
    {
        name: "Skills",
        url: ROUTES.skillsRoute(),
        cName: "nav-link"
    },
    {
        name: "Contact",
        url: ROUTES.contactRoute(),
        cName: "nav-link"
    }
];

export default menuData;