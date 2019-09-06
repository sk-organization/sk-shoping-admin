import gql from 'graphql-tag';

// FETCH_RESELLER
export const FETCH_RESELLER = gql`
  query($id: ID) {
    resellers(where: { id: $id }) {
      id
      user {
        name
        phone
        image
        location {
          city
        }
      }
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const FETCH_SOLD_PRODUCTS_COUNT = gql`
  query($where: SoldProductWhereInput!) {
    soldProductsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const FETCH_SOLD_PRODUCTS = gql`
  query($where: SoldProductWhereInput!, $skip: Int) {
    soldProductsConnection(where: $where, first: 10, skip: $skip) {
      aggregate {
        count
      }
      edges {
        node {
          product {
            id
            name
            image {
              _200x200
            }
            category {
              name
            }
            subCategory {
              name
            }
            price {
              sellingPrice
              discountPercent
            }
          }
          seller {
            user {
              name
            }
          }
          soldDate
          margin
        }
      }
    }
  }
`;

export const FETCH_SOLD_DATES = gql`
  query($id: ID!) {
    soldProducts(where: { resellers: { id: $id } }, orderBy: soldDate_ASC) {
      soldDate
    }
  }
`;

// FETCH RESELLER'S
export const FETCH_RESELLERS = gql`
  {
    resellers(first: 20) {
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
        image
      }
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;

export const SEARCH_RESELLERS = gql`
  query($term: String!) {
    resellers(where: { user: { name_starts_with: $term } }, first: 20) {
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
      bankDetails {
        bankName
        accountNumber
        IFSC_CODE
      }
    }
  }
`;
