import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListOfInvestors from './pages/ListOfInvestors';
import InvestorCommitments from './pages/InvestorCommitments';


const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<ListOfInvestors />} />
      <Route path="/investor/:id" element={<InvestorCommitments />} />
    </Routes>
  </Router>
);

export default routes;
