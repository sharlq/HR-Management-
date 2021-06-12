import jwt from "jsonwebtoken";

export default (req, res) => {
  let SECRET = process.env.REACT_APP_JWT_SECRET;
  if (req.method === "POST") {
    let data = req.body;
    jwt.verify(data.token, SECRET, (err, decoded) => {
      if (decoded) {
        res.json({ verified: true,
                    name:decoded.name });
      } else {
        res.json({ verified: false });
      }
      console.log(decoded);
    });
  }
};
