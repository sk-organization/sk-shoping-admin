import React from 'react';

const LocationInfo = ({ LocationInfo }) => {
  const { city, zipCode, address1, address2 } = LocationInfo;

  return (
    <div>
      <h3>Location Info</h3>
      <div>
        City: <strong>{city}</strong>
      </div>
      <div>
        Address:{' '}
        <strong>
          {address1}, {address2}
        </strong>
      </div>
      <div>
        ZipCode: <strong>{zipCode}</strong>
      </div>
    </div>
  );
};

export default LocationInfo;
