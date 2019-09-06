import gql from 'graphql-tag';

const categories = gql`
  query($where: CategoryWhereInput) {
    categories(where: $where) {
      id
      image
      name
      totalProducts
    }
  }
`;

export { categories };
