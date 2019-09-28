import gql from 'graphql-tag';

const subCategories = gql`
  query($where: SubCategoryWhereInput = {}, $skip: Int = 0, $first: Int = 2) {
    subCategories(where: $where, first: $first, skip: $skip) {
      id
      name
      image
      totalProducts
      category {
        name
      }
    }
  }
`;

export { subCategories };
