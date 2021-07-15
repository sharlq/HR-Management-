import { addTaskToProject,getUserProjects,createNewProject,deleteProject } from "../../../controllersAPI/projects/projects";

export default async (req, res) => {

  if (req.method === "POST") {

    createNewProject(req, res)
    
  } else if (req.method === "GET") {

    getUserProjects(req,res)
    
  } else if (req.method === "PUT") {
    
    addTaskToProject(req, res);

  } else if (req.method === "DELETE") {

    deleteProject(req,res)

  }
};
