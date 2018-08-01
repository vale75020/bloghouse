import { ADMIN } from '../resources/users/user.service'

export const isAdmin = (req, res, next) => {
    if (req.user.role !== 2) {
        return res.json({ err: 'unauthorized, not an admin'})
    }
}
