import styled from "styled-components";

export const ListArtboards = ({ artboards }) => {
  return (
    <ArtboardsWrapper>
      {artboards.map((artboard, i) => {
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
          <ArtboardWrapper key={url}>
            <img src={url} style={{ "aspect-ratio": aspectRatio.toFixed(3) }} />
            <ArtboardName>{name}</ArtboardName>
          </ArtboardWrapper>
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

const ArtboardWrapper = styled.div`
  margin: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    margin: auto 0;
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
