import { ADMIN } from '../resources/users/user.service'

export const isAdmin = (req, res, next) => {
    if (req.user.role !== ADMIN) {
        return res.json({ err: 'unauthorized, not an admin'})
    }
}
