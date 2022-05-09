export default function ImageContainer({ gallerys }) {
  return (
    <div id='gallery' className='column'>
      {gallerys?.map((gallery, i) => {
        const img_url = 'https:' + gallery.fields.galleryImg.fields.file.url;
        return (
          <img
            key={i}
            alt={`image ${i + 1}`}
            src={img_url}
            data-image={img_url}
            data-description='image placeholder'
            style={{ width: '100%' }}
          />
        );
      })}
    </div>
  );
}
