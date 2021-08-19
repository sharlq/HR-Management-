import projects from '../../../Model/project'
export default async (req, res) => {
    if(req.method==="PUT"){
        const id = req.query.projectId;
        const employeeName = req.query.name;
        projects.findOne({_id:id},async(err,result)=>{
          const updatedTeam =  result.team;
          updatedTeam.push(employeeName)
           await projects.updateOne({_id:id},{team:updatedTeam})
           res.send('done')
        })
    }
  };
  