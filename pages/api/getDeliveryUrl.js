const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME,
  api_key: process.env.REACT_APP_API_KEY,
  api_secret: process.env.REACT_APP_API_SECRET,
});

export default async function handleUpload(req, res) {
  try {
    const publicId = req.body.publicId;
    const image = await cloudinary.image(publicId, {
      effect: 'viesus_correct',
      sign_url: true,
    });
    const URLfromImageTag = await /src='(.+?)'/.exec(image)[1];
    res.send({ URL: URLfromImageTag });
  } catch (error) {
    res.send(error);
  }
}
