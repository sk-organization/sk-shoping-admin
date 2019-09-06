import gql from 'graphql-tag';

const customers = gql`
  query {
    users {
      id
      name
      email
      image
      country
      phone
      location {
        city
        zipCode
        address1
        address2
      }
      gender
    }
  }
`;

const cart = gql`
  query($where: CartWhereInput!) {
    carts(where: $where) {
      id
      total
      totalProducts
      product {
        id
        image
        name
        price
      }
      selectedVariations {
        id
        color
        sizes {
          id
          name
          quantity
        }
        images
      }
    }
  }
`;

const user = gql`
  query($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
      image
      country
      phone
      location {
        city
        zipCode
        address1
        address2
      }
      gender
    }
  }
`;

export { customers, cart, user };
