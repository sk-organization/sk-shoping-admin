import { useState, useEffect } from 'react';
import client from '../../app/config/apollo';

const operationMapping = {
  query: 'query',
  mutation: 'mutate',
};

const useData = props => {
  const { operation = 'query', gql, variables = {}, result } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await client[operationMapping[operation]]({
        [operation]: gql,
        variables,
      });
      setData(data[result]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, data];
};

export { useData };
