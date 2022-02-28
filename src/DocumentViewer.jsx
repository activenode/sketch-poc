import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Artboard } from "./components/documents/Artboard";
import { ListArtboards } from "./components/documents/ListArtboards";
import { Topbar, TOPBAR_HEIGHT } from "./components/documents/Topbar";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import "./styles/global.css";
import { isPositiveNumber } from "./utils/isNumber";

function useArtboardId() {
  let errorneous = false;
  let { artboardId } = useParams();

  // React Router v6 doesn't support regexing paths ATM.
  // so we build custom validation

  if (artboardId !== undefined) {
    if (!/[\d]+/.test(artboardId) || !isPositiveNumber(artboardId)) {
      errorneous = true;
      artboardId = null;
    } else {
      artboardId *= 1; // making sure it's not a string
    }
  }

  return [errorneous, artboardId];
}

function DocumentViewer() {
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  const [errorneous, artboardId] = useArtboardId();
  const navigate = useNavigate();

  const listArtboards = !isPositiveNumber(artboardId);
  const showSpecificArtboard = !listArtboards; // it's a binary choice so we can do that

  const doc = data?.share?.version?.document;
  const documentName = doc?.name;
  const artboards = doc?.artboards?.entries;
  const artboardsCount = (artboards || []).length;
  const specificArtboard = artboards?.[artboardId];

  useEffect(() => {
    if (errorneous) {
      // go to 404 page
      navigate("/404");
    }
  }, [errorneous, navigate]);

  const currentArtboardNum = artboardId + 1;

  const artboardNextHref = `/a/${
    currentArtboardNum === artboardsCount ? 0 : currentArtboardNum
  }`;
  const artboardPrevHref = `/a/${
    currentArtboardNum === 1 ? artboardsCount - 1 : artboardId - 1
  }`;

  const topbarConfig = {
    mode: showSpecificArtboard ? "artboard" : "document",
    currentArtboardNum, // only works because we know it's the index
    totalArtboardsNum: artboardsCount,
    artboardNextHref,
    artboardPrevHref,
    title: showSpecificArtboard ? specificArtboard?.name : documentName,
  };

  return (
    <>
      {loading && "Loading..."}
      {error && "Sorry, we got some error over here!"}
      {!loading && !error && (
        <>
          <Topbar {...topbarConfig} />
          <BelowTopbarContent>
            {listArtboards && <ListArtboards artboards={artboards} />}
            {showSpecificArtboard && (
              <Artboard
                artboard={specificArtboard}
                onRequestNext={() => {
                  navigate(artboardNextHref);
                }}
                onRequestPrev={() => navigate(artboardPrevHref)}
              />
            )}
          </BelowTopbarContent>
        </>
      )}
    </>
  );
}

const BelowTopbarContent = styled.div`
  position: relative;
  margin-top: ${TOPBAR_HEIGHT};
  flex-grow: 1;
`;

export default DocumentViewer;
