import gql from 'graphql-tag';

const orders = gql`
  query(
    $where: OrderWhereInput!
    $orderBy: OrderOrderByInput = createdAt_DESC
    $skip: Int = 0
    $first: Int = 5
  ) {
    orders(where: $where, orderBy: $orderBy, first: $first, skip: $skip) {
      id
      status
      createdAt
      orderBy {
        gender
        image
        name
        createdAt
      }
      total
      totalProducts
      products {
        product {
          price
        }
        selectedVariations {
          sizes {
            quantity
          }
        }
      }
    }
  }
`;

const order = gql`
  query($id: ID!) {
    order(where: { id: $id }) {
      id
      orderBy {
        name
        email
        image
        country
        phone
        createdAt
        gender
        skMoney
      }
      status
      createdAt
      paymentMethod
      shippingAddress {
        city
        zipCode
        address1
        address2
      }
      total
      products {
        total
        product {
          name
          price
          discountPercent
          variations {
            images
            sizes {
              name
              quantity
            }
          }
          seller {
            shopName
            shopLocation {
              city
              zipCode
              address1
              address2
            }
          }
          subCategory {
            name
          }
        }
        selectedVariations {
          color
          images
          sizes {
            name
            quantity
          }
        }
      }
    }
  }
`;

export { orders, order };
