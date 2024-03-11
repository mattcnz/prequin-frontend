import axios from 'axios';

const BASE_URL = 'http://0.0.0.0:8000/api';

async function getInvestors() {
  const response = await axios.get(`${BASE_URL}/investors`);
  return response.data;
}

async function getInvestorCommitments(assetClass, investorId) {
  const response = await axios.get(`${BASE_URL}/investor/commitment/${assetClass}/${investorId}`);
  console.log('res', response.data)
  return response.data
}

export { getInvestors,  getInvestorCommitments};

// import { useQuery } from 'react-query';

// const BASE_URL = 'http://0.0.0.0:8000/api';

// // Define a function to fetch data from the API
// const fetchData = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };

// // Define queries using useQuery hook
// // const getInvestorsQuery = useQuery('investors', () => fetchData(`${BASE_URL}/investors`));

// // const getInvestorsQuery = () => {
// //   const queryKey = 'investors';
// //   return useQuery(queryKey, () => fetchData(`${BASE_URL}/investors`));
// // };

// // const getInvestorCommitmentsQuery = (assetClass, investorId) => {
// //   const queryKey = ['investorCommitments', assetClass, investorId];
// //   return useQuery(queryKey, () => fetchData(`${BASE_URL}/investor/commitment/${assetClass}/${investorId}`));
// // };

// const getInvestorsApiCall = () => fetchData(`${BASE_URL}/investors`);
// const getInvestorsQuery = () => useQuery('investors', getInvestorsApiCall);

// export { getInvestorsQuery, getInvestorCommitmentsQuery };
