import ROUTES from "../../app/routes";
const menuData = [
    {
        name: "Home",
        url: ROUTES.homeRoute(),
        cName: "inline-grid-col nav-item"
    },
    {
        name: "About",
        url: ROUTES.aboutRoute(),
        cName: "inline-grid-col nav-item"
    },
    {
        name: "Skills",
        url: ROUTES.skillsRoute(),
        cName: "inline-grid-col nav-item"
    },
    {
        name: "Projects",
        url: ROUTES.skillsRoute(),
        cName: "inline-grid-col nav-item"
    },
    {
        name: "Contact",
        url: ROUTES.contactRoute(),
        cName: "inline-grid-col nav-item"
    }
];

export default menuData;