import { updateProfile,fetchUserProfile } from "../../../controllersAPI/profile/profile";

export default (req, res) => {

  if (req.method === "POST") {
    updateProfile(req, res)
  }else if (req.method === "GET") {
    fetchUserProfile(req,res)
  }
};
