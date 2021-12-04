class HomeController {
    index(req, res) {
        res.json({ success: true, message: 'home page' });
    }
}

module.exports = new HomeController;