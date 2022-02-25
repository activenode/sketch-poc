import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";
import { Topbar } from "./components/documents/Topbar";

const TestButton = styled.button`
  background: yellow;
`;

function DocumentViewer() {
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  console.log({ data });

  return (
    <>
      <div>Topbar with Document Name and Spacer</div>
      <div>
        Content
        <TestButton>Hello</TestButton>
      </div>
    </>
  );
}

export default DocumentViewer;
