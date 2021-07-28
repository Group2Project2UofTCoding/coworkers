const withAuth = (req, res, next) => {
    if (!req.session.manager_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;