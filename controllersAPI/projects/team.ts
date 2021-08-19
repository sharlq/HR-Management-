import type { NextApiRequest, NextApiResponse } from 'next';
import projects from "../../Model/project";

export const addTeamMember = (req:NextApiRequest,res:NextApiResponse)=>{
    const id = req.query.projectId;
    const employeeName = req.query.name;
    projects.findOne({ _id: id }, async (err, result) => {
      if (!err && result) {
        updateTeam({id , employeeName ,result ,res});
      }
    });
}

const updateTeam = async({id , employeeName ,result ,res}) =>{
    const updatedTeam = result.team;
    if (!updatedTeam.includes(employeeName)) {
      updatedTeam.push(employeeName);
      await projects.updateOne({ _id: id }, { team: updatedTeam });
      res.send("done");
    } else {
      res.send("employee already in the project");
    }
}