// Desc: Component to display a table that shows data for all investors

import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
} from '@chakra-ui/react';

import { getInvestors } from '../api';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const InvestorTable = () => {

    const { data: investors = [], isLoading, error } = useQuery(
        ['investors'], 
        () => getInvestors() 
    );
    
    if (isLoading) {
        return <p>Loading investors...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Box>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Firm ID</Th>
                            <Th>Firm Name</Th>
                            <Th>Firm Type</Th>
                            <Th>Date Added</Th>
                            <Th>Address</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {investors.map((investor) => (
                            <Tr key={investor.firm_id}>
                                <Td>
                                    <Link to={`/investor/${investor.firm_id}`}> {/* Link to investor details page */}
                                        {investor.firm_id}
                                    </Link>
                                </Td>
                                <Td>{investor.firm_name}</Td>
                                <Td>{investor.firm_type}</Td>
                                <Td>{investor.date_added.slice(0, 10)}</Td>
                                <Td>{investor.address}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default InvestorTable;
