const jimp = require("jimp");

const handleAvatar = async (path) => {
  const image = await jimp.read(path);
  image
    .autocrop()
    .cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE)
    .quality(60)
    .write(path);
};

module.exports = handleAvatar;
