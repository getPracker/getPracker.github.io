import {
  Route,
  Routes
} from "react-router-dom";
import NewProjectForm from "../components/Projects/NewProjectForm";
import Skills from "../features/Skills/Skills";
import AboutMe from "../features/AboutMe/AboutMe";
import Contact from "../features/Contact/Contact";
import Projects from "../features/Projects/Projects";
import Header from "../components/Header/Header";

const ROUTES = {
    projectsRoute: () => "/projects",
    skillsRoute: () => "/skills",
    contactRoute: () => "/contact",
    projectRoute: (id) => `/projects/${id}`,
    newProjectsRoute: () => "new",
    homeRoute: () => "/",
    aboutRoute: () => '/about'
  };

  export function RoutesComp(){
    return (
      <>
    <Routes>
      <Route path='/' element={<Header/>}/> 
      <Route path={ROUTES.skillsRoute()} element={<Skills/>}/>
      <Route path={ROUTES.aboutRoute()} element={<AboutMe/>}/>
      <Route path={ROUTES.projectsRoute()}>
        <Route index element= {<Projects/>}/>
        <Route path={ROUTES.newProjectsRoute()} element= {<NewProjectForm/>}/>
      </Route>
      <Route path={ROUTES.contactRoute()} element={<Contact/>}/>
    </Routes>
      </>
    )
  }
  
  
  export default ROUTES;
  