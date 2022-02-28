import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { CenterFlexFull } from "../utils/CenterFlex";

function useArrowKeys(leftCallback, rightCallback) {
  useEffect(() => {
    const keyListener = (keyEvent) => {
      const arrowRightKey = 39;
      const arrowLeftKey = 37;

      if (keyEvent.keyCode === arrowRightKey) {
        rightCallback();
      } else if (keyEvent.keyCode === arrowLeftKey) {
        leftCallback();
      }
    };

    window.addEventListener("keyup", keyListener);
    return () => window.removeEventListener("keyup", keyListener);
  }, [leftCallback, rightCallback]);
}

export const Artboard = ({ artboard, onRequestNext, onRequestPrev }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useArrowKeys(onRequestPrev, onRequestNext);

  const { name, files } = artboard;
  const originalFile = files[0];

  const { url, width } = originalFile;

  useLayoutEffect(() => {
    setIsLoaded(false);
    // for hot reload only we could improve it here
    // by saving the map of which were loaded
    // such that we do not get the "hot reload side effect"
    // of it putting the loaded image to isLoaded=false

    return () => {
      setIsLoaded(true);
    };
  }, [url]);

  const image = useMemo(() => {
    return (
      <ArtboardImage
        src={url}
        alt={`Artboard Image: '${name}'`}
        width={width}
        hidden={!isLoaded}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    );
  }, [url, isLoaded, width]);

  return (
    <ArtboardImageHold onClick={onRequestNext}>
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
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;
