import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailsQuery } from '../services/CryptoApi';

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const { data } = useDetailsQuery(cryptoId);
  console.log(data);
  console.log(cryptoId);
  return <div>CryptoDetails N: {cryptoId}</div>;
};

export default CryptoDetails;
