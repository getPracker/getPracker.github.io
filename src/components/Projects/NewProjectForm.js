import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
import { addNewProject } from "../../features/Projects/projectsSlice";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../../app/routes";
import { useNavigate } from "react-router-dom";

export default function NewProjectForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    dispatch(addNewProject({ name: name, id: uuidv4(), description }));
    //redirect(ROUTES.projectsRoute());
    //navigate(ROUTES.projectsRoute() ,{replace: true});
  };

  return (
    <section >
      <form onSubmit={handleSubmit} className="form">
        <div className="form-items">
            <h1 className="center ">Create a new Project</h1>
            <div className="form-section">
                <div>
                    <input
                        id="project-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Topic Name"
                    />
                    <input
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        id="project-description"
                        type="text"
                        value={description}
                        required
                        placeholder="Project Description"
                    >
                    </input>
                </div>
            </div>
            <button className="center form-button">Add Project</button>
        </div>
      </form>
    </section>
  );
}
