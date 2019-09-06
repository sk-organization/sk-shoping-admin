import gql from 'graphql-tag';

const subCategories = gql`
  query($where: SubCategoryWhereInput = {}) {
    subCategories(where: $where) {
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
