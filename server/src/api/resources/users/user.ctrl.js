import User, { USER } from "./user.model"
import userService from './user.service'
import jwt from "../../helpers/jwt"

export default {

    async signup(req,res) {

        try {

            const { value, error } = userService.validateSignUp(req.body)
            if(error) {
                return res.status(400).json(error)
            }
            const encryptedPass = userService.encryptPassword(value.password)
            
            const user = await User.create({
                firstName: value.firstName,
                lastName: value.lastName,
                email: value.email,
                password: encryptedPass,
                role: value.role || USER

            })
            return res.json({ succes: true })
        } catch (err) {
          console.log(err)
          return res.status(500).send(err)
    }
    return res.json(value)
  },


    async login(req, res) {

      try {

          const { value, error } = userService.validateLogin(req.body)
          if(error) {
              return res.status(400).json(error)
          }
          const user = await User.findOne({email: value.email})
          if(!user) {
              return res.status(401).json({err:"unauthorized"})
          }
          const authenticated = userService.comparePassword(
            value.password,
            user.password
        );
        if(!authenticated) {
            return res.status(401).json({err: "unauthorized"});
      }
      const token = jwt.issue({ id: user._id}, "1d");
            return res.json({token});
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
    }
  },

  authenticated(req, res) {
      return res.json(req.user)
  }
}
