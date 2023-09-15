import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    sampleQuery: SampleType
  }

  type SampleType {
    field: String
  }
`;

export default typeDefs;
