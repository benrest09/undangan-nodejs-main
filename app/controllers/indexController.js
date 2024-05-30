// controllers/indexController.js
import data from "../database/index.js";

const indexController = {
  getIndex: (req, res) => {
    res.render("pages/index", {
      layout: "layouts/mainLayout",
      data: data,
    });
  },
};

export default indexController;
