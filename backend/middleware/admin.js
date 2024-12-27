const jwt = require('jsonwebtoken');

// Middleware pour vérifier si l'utilisateur est admin
const verifyAdmin = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified.role !== 'admin') {
      return res.status(403).json({ message: 'Access Denied. Admins only.' });
    }
    req.user = verified; // Attache les informations utilisateur à la requête
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = { verifyAdmin };
