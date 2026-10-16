import { config } from "../config/configs.js";
import { ROLE } from "../utils/constants.js";


async function AuthMiddleWare(req, res) {
    // Check the user tokerns 
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access token missing' });

    try {
        const decoded = jwt.verify(token, config.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired access token' });
    }
}

async function CheeckRole(...alowedRoles) {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return res.status(401).json({
                message: 'Unauthenticated or missing user role payload'
            });
        };

        const isPermited = alowedRoles.includes(req.user.role);
        if (!isPermited) {
            return res.status(403).json({
                message: 'Forbidden: You do not have permission'
            });
        }

        next();
    }
}

export {
    CheeckRole,
    AuthMiddleWare
}