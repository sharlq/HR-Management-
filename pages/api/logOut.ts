import cookie from "cookie";

export default (req, res) => {

  if (req.method === "GET") {
    res
      .status(200)
      .setHeader(
        "set-cookie",
        cookie.serialize("auth", "", {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 0,
          path: "/",
        })
      )
      .send("Loged Out");
  }
  
};
