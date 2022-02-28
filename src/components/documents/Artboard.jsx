import { useMemo, useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { CenterFlexFull } from "../utils/CenterFlex";

export const Artboard = ({ artboard }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const files = artboard.files;
  const biggestFile = files[files.length - 1];

  const { url } = biggestFile;

  useLayoutEffect(() => {
    setIsLoaded(false);
  }, [url]);

  const image = useMemo(() => {
    return (
      <ArtboardImage
        src={url}
        hidden={!isLoaded}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    );
  }, [url, isLoaded]);

  return (
    <ArtboardImageHold>
      {!isLoaded && "Loading..."}
      {image}
    </ArtboardImageHold>
  );
};

const ArtboardImageHold = styled(CenterFlexFull.div)`
  position: absolute;
  inset: 48px;
  overflow: hidden;
`;
const ArtboardImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;
