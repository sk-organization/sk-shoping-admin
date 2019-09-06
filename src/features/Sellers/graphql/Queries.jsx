import gql from 'graphql-tag';

// SELLER QUERY
export const FETCH_SELLER = gql`
  query($id: ID) {
    seller(where: { id: $id }) {
      id
      user {
        name
        phone
        image
        email
        gender
        location {
          city
          address1
          zipCode
        }
      }
      products {
        id
        name
        price
        variations {
          color
          sizes {
            name
            quantity
          }
          images
        }
        category {
          name
        }
        subCategory {
          name
        }
      }
      shopName
      website
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const FETCH_PRODUCTS = gql`
  query($where: ProductWhereInput!) {
    products(where: $where, first: 20) {
      id
      name
      price
      sellerPrice
      variations {
        color
        sizes {
          name
          quantity
        }
        images
      }
      category {
        name
      }
      subCategory {
        name
      }
    }
  }
`;

// SELLER'S QUERY
export const FETCH_SELLERS = gql`
  query {
    sellers(first: 20) {
      id
      user {
        name
        phone
        image
        location {
          city
          address1
          zipCode
        }
      }
      products {
        id
        name
        price
        variations {
          color
          sizes {
            name
            quantity
          }
          images
        }
        category {
          name
        }
        subCategory {
          name
        }
      }
      shopName
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const SEARCH_SELLERS = gql`
  query($term: String!) {
    sellers(where: { user: { name_contains: $term } }, first: 20) {
      id
      user {
        name
        phone
        location {
          city
          address1
          zipCode
        }
        image
      }
      shopName
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
      products {
        id
        name
        variations {
          color
          sizes {
            name
            quantity
          }
        }
        price
      }
    }
  }
`;
