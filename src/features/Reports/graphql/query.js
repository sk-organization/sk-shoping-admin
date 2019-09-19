import gql from 'graphql-tag';

const users = gql`
  query {
    users {
      id
      name
      email
      image
      phone
    }
  }
`;

const products = gql`
  query {
    products {
      id
      name
      price
      image
    }
  }
`;

export { users, products };
