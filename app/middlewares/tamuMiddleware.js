import data from "../database/tamu.js";

const cekTamu = (req, res, next) => {
  const namaTamu = req.params.tamu;

  res.locals.statusTamu = cariNama(namaTamu);

  if (res.locals.statusTamu === true) {
    // Split the name by "-"
    const parts = namaTamu.split("-");

    // Capitalize the first letter of each part and lowercase the rest
    const formattedName = parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");

    res.locals.namaTamu = formattedName;
  }

  next();
};

function cariNama(nama) {
  return data.includes(nama);
}

export default cekTamu;
