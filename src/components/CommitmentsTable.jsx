// Desc: Component to retrieves and display commitments for a given investor and asset class

import React from 'react';
import { getInvestorCommitments } from '../api';
import { useQuery } from 'react-query';
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


const Commitments = (props) => {

    // Get assetClass and investorId 
    const { assetClass, investorId } = props;

    // Fetch investor commitments using said assetClass and investorId
    const { data: commitments = [], isLoading, error } = useQuery(
        ['investorCommitments', assetClass, investorId], 
        () => getInvestorCommitments(assetClass, investorId) 
    );

    if (isLoading) {
        return <p>Loading...</p>;
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
                            <Th>ID</Th>
                            <Th>Asset Class</Th>
                            <Th>Firm ID</Th>
                            <Th>Currency</Th>
                            <Th isNumeric>Amount</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {commitments.length === 0 && (!isLoading) ? <Tr><Td colSpan="5">No commitments found</Td></Tr> : null}
                        {commitments.map((commitment) => (
                            <Tr key={commitment.id}>
                                <Td>{commitment.id}</Td>
                                <Td>{commitment.asset_class}</Td>
                                <Td>{commitment.firm_id}</Td>
                                <Td>{commitment.currency}</Td>
                                <Td isNumeric>
                                    {commitment.amount} {/* Format amount with "Million" */}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Commitments;
