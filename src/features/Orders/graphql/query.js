import gql from 'graphql-tag';

const orders = gql`
  query($where: OrderWhereInput!) {
    orders(where: $where) {
      id
      status
      createdAt
      orderBy {
        gender
        image
        name
        createdAt
      }
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
      }
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
