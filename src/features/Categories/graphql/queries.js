import gql from 'graphql-tag';

const categories = gql`
  query($where: CategoryWhereInput, $skip: Int = 0, $first: Int = 2) {
    categories(where: $where, skip: $skip, first: $first) {
      id
      image
      name
      totalProducts
    }
  }
`;

export { categories };
