import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ error: 'Token is required' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        // req.user = decoded;
        next();
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
}

export default adminAuth;