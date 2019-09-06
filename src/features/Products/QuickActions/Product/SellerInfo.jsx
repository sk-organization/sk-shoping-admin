import React from 'react';

const SellerInfo = ({ seller }) => {
  const { shopName, website, landlineNumber, bankDetails } = seller;
  const { bankName, accountNumber, IFSC_CODE } = bankDetails || {};

  return (
    <div>
      <h2>Seller Info!!</h2>
      <div>
        Shop Name: <strong>{shopName}</strong>
        <br />
        Website: <strong>{website}</strong>
        <br />
        Landline Number: <strong>{landlineNumber}</strong>
        <br />
        <h4>Bank Details</h4>
        Bank Name: <strong>{bankName}</strong>
        <br />
        Account Number: <strong>{accountNumber}</strong>
        <br />
        IFSC CODE: <strong>{IFSC_CODE}</strong>
      </div>
    </div>
  );
};
export default SellerInfo;
