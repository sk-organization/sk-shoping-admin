import gql from 'graphql-tag';

const carousels = gql`
  query {
    carousels {
      id
      image
      index
      show
      tag {
        id
        name
      }
    }
  }
`;

export { carousels };
