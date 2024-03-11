// @vitest-environment happy-dom

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import InvestorTable from '../components/InvestorTable';
import { vi, beforeEach, describe, it, expect } from 'vitest';
import { useQuery } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
vi.mock('react-query');


// /{"firm_id":2670,"firm_name":"Mjd Jedi fund","AUM":426920827,"date_added":"2010-06-08T00:00:00Z","last_updated":"2024-02-21T00:00:00Z","established_at":"2010-06-08T00:00:00Z","firm_type":"bank","city":"Hong Kong","country":"China","address":"29 Nathan Road, Hong Kong","postal_code":"37E"}

// 3 differnet mock investors 

const mockInvestors = [
    {
      firm_id: "zhesywqruf",
      firm_name: "qphzcketlv",
      AUM: 426920827,
      date_added: "2024-03-10T00:00:00Z", // Different date
      last_updated: "2024-02-21T00:00:00Z",
      established_at: "2010-06-08T00:00:00Z",
      firm_type: "investment_bank",
      city: "New York",
      country: "USA",
      address: "10 Wall St, New York",
      postal_code: "10005"
    },
    {
      firm_id: "bnjikmvfls",
      firm_name: "gxnydxsode",
      AUM: 426920827,
      date_added: "2024-03-11T00:00:00Z", // Different date
      last_updated: "2024-02-21T00:00:00Z",
      established_at: "2010-06-08T00:00:00Z",
      firm_type: "hedge_fund",
      city: "London",
      country: "UK",
      address: "One Canada Square, Canary Wharf",
      postal_code: "E14 5AX"
    },
    {
      firm_id: "tgyohwtukf",
      firm_name: "lcpqmtoijn",
      AUM: 426920827,
      date_added: "2024-03-12T00:00:00Z", // Different date
      last_updated: "2024-02-21T00:00:00Z",
      established_at: "2010-06-08T00:00:00Z",
      firm_type: "private_equity",
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place",
      postal_code: "048616"
    }
  ];
  


describe('Investors Table', () => {
    beforeEach(() => {
        useQuery.mockReset();
    });

    it('renders loading state', () => {
        useQuery.mockReturnValueOnce({ isLoading: true });
        render(<InvestorTable />);
        expect(screen.getByText('Loading investors...')).toBeInTheDocument();
    }
    );

    it('renders investors', async () => {
        useQuery.mockReturnValue({ data: mockInvestors, isLoading: false, error: null });
        render(<BrowserRouter><InvestorTable /></BrowserRouter>);

        await waitFor(() => {
            expect(screen.getByText('Firm ID')).toBeInTheDocument();
            expect(screen.getByText('Firm Name')).toBeInTheDocument();
            expect(screen.getByText('Firm Type')).toBeInTheDocument();
            expect(screen.getByText('Date Added')).toBeInTheDocument();
            expect(screen.getByText('Address')).toBeInTheDocument();
            expect(screen.getByText('zhesywqruf')).toBeInTheDocument();
            expect(screen.getByText('qphzcketlv')).toBeInTheDocument();
            expect(screen.getByText('investment_bank')).toBeInTheDocument();
            expect(screen.getByText('2024-03-10')).toBeInTheDocument();
            expect(screen.getByText('10 Wall St, New York')).toBeInTheDocument();
            expect(screen.getByText('bnjikmvfls')).toBeInTheDocument();
            expect(screen.getByText('gxnydxsode')).toBeInTheDocument();
            expect(screen.getByText('hedge_fund')).toBeInTheDocument();
            expect(screen.getByText('2024-03-11')).toBeInTheDocument();
            expect(screen.getByText('One Canada Square, Canary Wharf')).toBeInTheDocument();
            expect(screen.getByText('tgyohwtukf')).toBeInTheDocument();
            expect(screen.getByText('lcpqmtoijn')).toBeInTheDocument();
            expect(screen.getByText('private_equity')).toBeInTheDocument();
            expect(screen.getByText('2024-03-12')).toBeInTheDocument();
        });
    })
});