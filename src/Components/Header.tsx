import React from 'react';
import {useQuery, gql} from '@apollo/client'
const EXCHANGE_RATES = gql`
  query universities {
    name
  }
`;

function Header()  {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p> ;
  if (error) return <p>Error :</p>;
  return data.universities.map((university:any)=>console.log(university.name))
}
export default Header

