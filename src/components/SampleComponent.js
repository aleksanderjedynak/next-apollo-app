import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const SAMPLE_QUERY = gql`
  {
    sampleQuery {
      field
    }
  }
`;

function SampleComponent() {
    const { loading, error, data } = useQuery(SAMPLE_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return <div>{data.sampleQuery.field}</div>;
}

export default SampleComponent;
