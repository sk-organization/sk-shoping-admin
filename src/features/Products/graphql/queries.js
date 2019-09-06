import gql from 'graphql-tag';

const products = gql`
  query($where: ProductWhereInput) {
    products(first: 20, where: $where) {
      id
      name
      price
      createdAt
      updatedAt
      description
      viewed
      variations {
        sizes {
          name
          quantity
        }
        images
      }
      category {
        id
        name
      }
      subCategory {
        id
        name
      }
      seller {
        shopName
        user {
          name
        }
      }
      tags {
        id
        name
      }
    }
  }
`;

const product = gql`
  query($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      image
      images
      price
      sellerPrice
      discountPercent
      returnableSKMoney
      description
      deliveryWithin
      createdAt
      dispatchDuration
      deliveryDuration
      seller {
        id
        website
        shopName
        landlineNumber
        bankDetails {
          IFSC_CODE
          bankName
          accountNumber
        }
        user {
          skMoney
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
        }
      }
      category {
        image
        name
      }
      subCategory {
        image
        name
      }
      tags {
        name
      }
      variations {
        id
        color
        sizes {
          id
          name
          quantity
        }
      }
    }
  }
`;

const categories = gql`
  query {
    categories {
      id
      name
    }
  }
`;

const subCategories = gql`
  query {
    subCategories {
      id
      name
      category {
        id
      }
    }
  }
`;

const selllers = gql`
  query {
    sellers {
      id
      shopName
      user {
        name
      }
    }
  }
`;

export { products, product, categories, subCategories, selllers };
