import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import { Topbar } from "./components/documents/Topbar";
import "./styles/global.css";
import { useCallback } from "react";

const TestButton = styled.button`
  background: yellow;
`;

function DocumentViewer() {
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  const artboardForward = useCallback(() => {
    alert("forward clicked");
  }, []);

  const artboardPrevious = useCallback(() => {
    alert("previous clicked");
  }, []);

  console.log({ data });

  const topbarConfig = {
    mode: "artboard",
    currentArtboardNum: 2,
    totalArtboardsNum: 10,
    onClickForward: artboardForward,
    onClickPrev: artboardPrevious,
  };

  return (
    <>
      <Topbar {...topbarConfig} />
      <div>
        Content
        <TestButton>Hello</TestButton>
      </div>
    </>
  );
}

export default DocumentViewer;
