import { useQuery } from "@apollo/client";
import { GET_DOCUMENT } from "./graphql/GET_DOCUMENT";

function DocumentViewer() {
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: "e981971c-ff57-46dc-a932-a60dc1804992" },
  });

  console.log({ data });

  return <div>I will be the DocumentViewer Basis</div>;
}

export default DocumentViewer;
