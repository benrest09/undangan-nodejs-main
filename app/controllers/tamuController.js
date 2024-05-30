// controllers/tamuController.js
import data from "../database/index.js";

const tamuController = {
  getIndex: (req, res) => {
    if (res.locals.statusTamu === false) {
      console.log("unauthorized access: ", req.url);
      return res.status(404).render("404", {
        layout: "layouts/errorLayout",
        title: "Error 404",
      });
    }
    res.render("pages/tamu", {
      layout: "layouts/tamuLayout",
      data: data,
      nama_tamu: res.locals.namaTamu,
    });
  },
};

export default tamuController;
