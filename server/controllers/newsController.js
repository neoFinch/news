var newsModel = require('../models/newsModel.js');

/**
 * newsController.js
 *
 * @description :: Server-side logic for managing newss.
 */
module.exports = {

    /**
     * newsController.list()
     */
    list: function (req, res) {
        newsModel.find(function (err, newss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting news.',
                    error: err
                });
            }
            return res.json(newss);
        });
    },
    
};
