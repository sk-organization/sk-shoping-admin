import React from 'react';

const BasicInfo = ({ basicInfo, bankDetails }) => {
  const { name, email, phone, gender, country } = basicInfo;

  return (
    <div>
      <h3>Basic Info</h3>
      <div>
        Name: <strong>{name}</strong>
      </div>
      <div>
        Phone: <strong>{phone}</strong>
      </div>
      <div>
        Email: <strong>{email}</strong>
      </div>
      <div>
        Country: <strong>{country}</strong>
      </div>
      <div>
        Gender: <strong>{gender}</strong>
      </div>
      <br />

      {bankDetails && (
        <div>
          Bank Name: <strong>{bankDetails.bankName}</strong>
        </div>
      )}

      {bankDetails && (
        <div>
          A/c : <strong>{bankDetails.accountNumber}</strong>
        </div>
      )}

      {bankDetails && (
        <div>
          IFSC_CODE: <strong>{bankDetails.IFSC_CODE}</strong>
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
