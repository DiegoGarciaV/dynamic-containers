import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from '../../spa/about/Background'
import Values from '../../spa/about/Values'
import OrganizationChart from '../../spa/about/OrganizationChart'
import Directory from '../../spa/about/Directory'
import Management from '../../spa/about/Management'
import About from './About';

const AboutRouter = () => (
  <Routes>
    <Route path="/" element={<About />} >
      <Route index element={<Background />} />
      <Route path="valores" element={<Values />} />
      <Route path="organigrama" element={<OrganizationChart />} />
      <Route path="directorio" element={<Directory />} />
      <Route path="gestion" element={<Management />} />
    </Route>
  </Routes>
);

export default AboutRouter;
