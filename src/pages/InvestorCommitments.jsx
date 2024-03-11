
// Desc: parent level component to display individual investor commitments per asset

import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getInvestors } from '../api';

import { useQuery } from 'react-query';

import CommitmentsTable from '../components/CommitmentsTable';
import Dropdown from '../components/Dropdown';

import {
    Heading,
} from '@chakra-ui/react';


const getInvestorNameFromDb = (id, data) => {
    const investor = data.find(item => item.firm_id === id);
    if (!investor) {
        return null;
    }
    return investor.firm_name;
}


const Investor = () => {
    const { id } = useParams();
    const investorId = parseInt(id);

    const [assetClass, setAssetClass] = useState('pe');

    const handleSelection = useCallback((e) => {
        setAssetClass(e.target.value);
      }, []);

    const { data: investors = []} = useQuery('investors', getInvestors);

    const investorName = getInvestorNameFromDb(investorId, investors);

    return (
        <React.Fragment>
            <Heading as="h1" size="lg" mb={4}>{investorName}</Heading>
            <Dropdown handleSelection={handleSelection} assetClass={assetClass} />
            <CommitmentsTable assetClass={assetClass} investorId={investorId} />
        </React.Fragment>
    )
}

export default Investor;
