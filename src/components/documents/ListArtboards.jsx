import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListArtboards = ({ artboards }) => {
  return (
    <ArtboardsWrapper>
      {artboards.map((artboard, id) => {
        const { files, name } = artboard;
        console.log({ artboard });
        const lastFile = files[files.length - 1];
        const { width, height } = lastFile;
        const aspectRatio = width / height;
        const thumbnails = lastFile.thumbnails;
        const lastThumbnail = thumbnails[thumbnails.length - 1];
        const { url } = lastThumbnail;

        // using the url as key is probably better than the index.
        // Why is there no artboard id?
        return (
          <ArtboardLink key={url} to={`/a/${id}`}>
            <img
              alt={`Image Thumbnail of Artboard "${name}"`}
              src={url}
              style={{ aspectRatio: aspectRatio.toFixed(3) }}
            />
            <ArtboardName>{name}</ArtboardName>
          </ArtboardLink>
        );
      })}{" "}
    </ArtboardsWrapper>
  );
};

// Styled Components:
const ArtboardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ArtboardLink = styled(Link)`
  margin: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  img {
    display: block;
    margin: auto 0;
    min-width: 100%;
  }
`;

const ArtboardName = styled.span`
  color: rgba(0, 0, 0, 0.65);
  letter-spacing: -0.15;
  font-family: "SF Pro Text";
  font-size: 14px;
  margin-top: 16px;
  line-height: 20px;
  display: block;
`;
