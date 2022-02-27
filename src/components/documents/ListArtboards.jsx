export const ListArtboards = ({ artboards }) => {
  return artboards.map((artboard, i) => {
    const files = artboard.files;
    const lastFile = files[files.length - 1];
    const { width, height } = lastFile;
    const aspectRatio = width / height;
    const thumbnails = lastFile.thumbnails;
    const lastThumbnail = thumbnails[thumbnails.length - 1];
    const { url } = lastThumbnail;

    // using the url as key is probably better than the index.
    // Why is there no artboard id?
    return (
      <div key={url}>
        <img src={url} style={{ "aspect-ratio": aspectRatio.toFixed(3) }} />
      </div>
    );
  });
};
