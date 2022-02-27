import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import { Topbar, TOPBAR_HEIGHT } from "./components/documents/Topbar";
import { Link, useParams, useNavigate } from "react-router-dom";
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

  const doc = data?.share?.version?.document;
  const documentName = doc?.name;
  const artboards = doc?.artboards?.entries;

  const [errorneous, artboardId] = useArtboardId();
  const navigate = useNavigate();

  if (errorneous) {
    // go to 404 page
    navigate("/404");
  }

  const artboardNextHref = "/mock-next";
  const artboardPrevHref = "/mock-prev";

  console.log({ doc, artboards });

  const topbarConfig = {
    mode: "document",
    currentArtboardNum: 2,
    totalArtboardsNum: 10,
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
            Hello
            <p>
              <Link to="/a/lol">
                Click me to trigger falsy Artboard Specific Link
              </Link>
            </p>
            <p>
              <Link to="/a/123">
                Click me to trigger truthy Artboard Specific Link
              </Link>
            </p>
            <p>
              <Link to="/">Click me to trigger Document Link</Link>
            </p>
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
