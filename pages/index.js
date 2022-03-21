import { useState } from 'react';
import axios from 'axios';
const image = {
  publicId: 'iimg_i8dsv8',
  URL: 'https://res.cloudinary.com/ifeomaimoh/image/upload/v1647864796/iimg_i8dsv8.jpg',
};
export default function IndexPage() {
  const [transformedImageURL, setTransformedImageURL] = useState('');

  const getSignedDeliveryURL = async () => {
    try {
      const res = await axios.post('/api/getDeliveryUrl', {
        publicId: image.publicId,
      });
      setTransformedImageURL(res.data.URL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main_con">
      <article>
        <h2> default image</h2>
        <div className="img_con">
          <img src={image.URL} alt={'test'} />
        </div>
      </article>
      <button onClick={getSignedDeliveryURL}> apply viscus effect </button>
      <article>
        <div className="img_con">
          {transformedImageURL && (
            <>
              <h2>Image with Viesus ffect</h2>
              <img src={transformedImageURL} alt={'test'} />
            </>
          )}
        </div>
      </article>
    </section>
  );
}
