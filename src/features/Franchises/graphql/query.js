import gql from 'graphql-tag';

const franchises = gql`
  query($where: FranchiseWhereInput, $skip: Int = 0, $first: Int = 2) {
    franchises(where: $where, skip: $skip, first: $first) {
      id
      dob
      isMarried
      noOfChildren
      husbandWorking
      education
      workExperience
      expectedSalary
      currentSalary
      user {
        name
        email
        image
        country
        phone
        gender
        location {
          city
          zipCode
          address1
          address2
        }
      }
      bankDetails {
        IFSC_CODE
        bankName
        accountNumber
      }
    }
  }
`;

const franchise = gql`
  query($id: ID!) {
    franchise(where: { id: $id }) {
      id
      dob
      isMarried
      noOfChildren
      husbandWorking
      education
      workExperience
      expectedSalary
      currentSalary
      user {
        name
        email
        image
        country
        phone
        gender
        location {
          city
          zipCode
          address1
          address2
        }
      }
      bankDetails {
        IFSC_CODE
        bankName
        accountNumber
      }
    }
  }
`;

export { franchises, franchise };
