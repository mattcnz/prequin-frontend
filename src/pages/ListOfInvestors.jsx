//Desc: parent level component to display all investors

import InvestorTable from "../components/InvestorTable";
import { Heading } from "@chakra-ui/react";
import React from "react";

const ListOfInvestors = () => {
    return (
        <React.Fragment>
            <Heading as="h1" size="lg" mb={4}>All Investors</Heading>
            <InvestorTable />
        </React.Fragment>
    );
    }

export default ListOfInvestors