// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from '../../Model/user'
export default  (req, res) => {
  if (req.method === 'POST'){
    let data = req.body
    user.create({
      name:data.name,
      email:data.email,
      password:data.password
    })
    res.send(data)
  }
}
