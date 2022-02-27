import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Artboard } from "./components/documents/Artboard";
import { ListArtboards } from "./components/documents/ListArtboards";
import { Topbar, TOPBAR_HEIGHT } from "./components/documents/Topbar";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import "./styles/global.css";

function useArtboardId() {
  let errorneous = false;
  let { artboardId } = useParams();

  // React Router v6 doesn't support regexing paths ATM.
  // so we build custom validation

  if (artboardId !== undefined) {
    if (!/[\d]+/.test(artboardId)) {
      errorneous = true;
      artboardId = null;
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

  const listArtboards = !artboardId;
  const showSpecificArtboard = !listArtboards; // it's a binary choice so we can do that

  const doc = data?.share?.version?.document;
  const documentName = doc?.name;
  const artboards = doc?.artboards?.entries;

  useEffect(() => {
    if (errorneous) {
      // go to 404 page
      navigate("/404");
    }
  }, [errorneous]);

  const artboardNextHref = "/mock-next";
  const artboardPrevHref = "/mock-prev";

  console.log({ doc, artboards });

  const topbarConfig = {
    mode: showSpecificArtboard ? "artboard" : "document",
    currentArtboardNum: 2,
    totalArtboardsNum: artboards?.length,
    artboardNextHref,
    artboardPrevHref,
    title: documentName,
  };

  return (
    <>
      {loading && "Loading..."}
      {!loading && (
        <>
          <Topbar {...topbarConfig} />
          <BelowTopbarContent>
            {listArtboards && <ListArtboards artboards={artboards} />}
            {showSpecificArtboard && <Artboard />}
          </BelowTopbarContent>
        </>
      )}
    </>
  );
}

const BelowTopbarContent = styled.div`
  margin-top: ${TOPBAR_HEIGHT};
  flex-grow: 1;
`;

export default DocumentViewer;