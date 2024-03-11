// @vitest-environment happy-dom

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CommitmentsTable from '../components/CommitmentsTable';
import { vi, beforeEach, describe, it, expect } from 'vitest';
import { useQuery } from 'react-query';
vi.mock('react-query');

const mockCommitments = [
    { id: 111111, asset_class: 'PE', firm_id: 101, currency: 'USD', amount: 100 },
    { id: 222222, asset_class: 'RE', firm_id: 102, currency: 'EUR', amount: 200 },
];

describe('Commitments', () => {
    beforeEach(() => {
        useQuery.mockReset();
    });

    it('renders loading state', () => {
        useQuery.mockReturnValueOnce({ isLoading: true });
        render(<CommitmentsTable assetClass="pe" investorId={1} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error state', () => {
        useQuery.mockReturnValueOnce({ error: new Error('Failed to load commitments') });
        render(<CommitmentsTable assetClass="pe" investorId={1} />);
        expect(screen.getByText('Error: Failed to load commitments')).toBeInTheDocument();
    });

    it('renders commitments', async () => {
        useQuery.mockReturnValueOnce({ data: mockCommitments, isLoading: false });
        render(<CommitmentsTable assetClass="pe" investorId={1} />);

        await waitFor(() => {
            // expect everything to be rendered
            expect(screen.getByText('ID')).toBeInTheDocument();
            expect(screen.getByText('Asset Class')).toBeInTheDocument();
            expect(screen.getByText('Firm ID')).toBeInTheDocument();
            expect(screen.getByText('Currency')).toBeInTheDocument();
            expect(screen.getByText('Amount')).toBeInTheDocument();
            expect(screen.getByText('111111')).toBeInTheDocument();
            expect(screen.getByText('PE')).toBeInTheDocument();
            expect(screen.getByText('101')).toBeInTheDocument();
            expect(screen.getByText('USD')).toBeInTheDocument();
            expect(screen.getByText('100')).toBeInTheDocument();
            expect(screen.getByText('222222')).toBeInTheDocument();
            expect(screen.getByText('RE')).toBeInTheDocument();
            expect(screen.getByText('102')).toBeInTheDocument();
            expect(screen.getByText('EUR')).toBeInTheDocument();
            expect(screen.getByText('200')).toBeInTheDocument();
        });
    });

});
