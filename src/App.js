import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import { Topbar, TOPBAR_HEIGHT } from "./components/documents/Topbar";
import "./styles/global.css";

function DocumentViewer() {
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  const artboardNextHref = "/mock-next";
  const artboardPrevHref = "/mock-prev";

  console.log({ data });

  const topbarConfig = {
    mode: "document",
    currentArtboardNum: 2,
    totalArtboardsNum: 10,
    artboardNextHref,
    artboardPrevHref,
  };

  return (
    <>
      <Topbar {...topbarConfig} />
      <BelowTopbarContent>Content</BelowTopbarContent>
    </>
  );
}

const BelowTopbarContent = styled.div`
  margin-top: ${TOPBAR_HEIGHT};
  flex-grow: 1;
`;

export default DocumentViewer;
