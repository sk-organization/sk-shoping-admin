import React from 'react';

const SellerInfo = ({ sellerInfo }) => {
  const {
    dob,
    isMarried,
    // noOfChildren,
    husbandWorking,
    education,
    workExperience,
    expectedSalary,
    currentSalary,
  } = sellerInfo;

  return (
    <div>
      <h3>Seller Info</h3>
      <div>
        Education:
        <strong>{education}</strong>
      </div>

      <div>
        DOB: <strong>{dob}</strong>
      </div>

      <div>
        Work Experience: <strong>{workExperience}</strong>
      </div>

      <div>
        Current Salary: <strong>{currentSalary}</strong>
      </div>

      <div>
        Expected Salary: <strong>{expectedSalary}</strong>
      </div>

      <div>
        Married: <strong>{isMarried === true ? 'Yes' : 'No'}</strong>
      </div>

      <div>
        Husband Working:{' '}
        <strong>{husbandWorking === true ? 'Yes' : 'No'}</strong>
      </div>
    </div>
  );
};

export default SellerInfo;
