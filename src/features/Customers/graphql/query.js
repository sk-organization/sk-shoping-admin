import gql from 'graphql-tag';

const users = gql`
  query($where: UserWhereInput!, $skip: Int = 0, $first: Int = 2) {
    users(where: $where, first: $first, skip: $skip) {
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

const searchUsers = gql`
  query($term: String!) {
    users(where: { name_contains: $term }, first: 20) {
      id
      name
      email
      image
      country
      phone
      location {
        id
        city
        zipCode
        address1
        address2
        latitude
        longitude
      }
      gender
    }
  }
`;

export { users, cart, user, searchUsers };
