import gql from 'graphql-tag';

// SELLER QUERY
const seller = gql`
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

const products = gql`
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
const sellers = gql`
  query($where: SellerWhereInput, $skip: Int = 0, $first: Int = 2) {
    sellers(where: $where, skip: $skip, first: $first) {
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

const searchSellers = gql`
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

export { seller, products, searchSellers, sellers };
