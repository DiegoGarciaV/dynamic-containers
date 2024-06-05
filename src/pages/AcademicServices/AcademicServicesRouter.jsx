import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcademicServices from './AcademicServices'
import Introduction from '../../spa/academic-services/school-services/Introduction';
import Movility from '../../spa/academic-services/movility/Movility';
import Social from '../../spa/academic-services/Social';
import Practices from '../../spa/academic-services/Practices';
import Scolarship from '../../spa/academic-services/Scolarship';
import Tutoring from '../../spa/academic-services/Tutoring'
import PsychologicalGuidance from '../../spa/academic-services/PsychologicalGuidance'
import JobBoard from '../../spa/academic-services/JobBoard'
import GeneralConditions from '../../spa/academic-services/movility/GeneralConditions';
import Admission from '../../spa/academic-services/school-services/Admission'
import Certificates from '../../spa/academic-services/school-services/Certificates'
import Imss from '../../spa/academic-services/school-services/Imss'
import Inscription from '../../spa/academic-services/school-services/Inscription'
import QnA from '../../spa/academic-services/school-services/QnA'
import Reinscription from '../../spa/academic-services/school-services/Reinscription'
import Suspension from '../../spa/academic-services/school-services/Suspension'
import Title from '../../spa/academic-services/school-services/Title'

const AcademicServicesRouter = () => (

    <Routes>
        <Route path="/" element={<AcademicServices />}>
            <Route index element={<Introduction />} />
            <Route path="escolares/admision" element={<Admission />} />
            <Route path="escolares/inscripcion" element={<Inscription />} />
            <Route path="escolares/reinscripcion" element={<Reinscription />} />
            <Route path="escolares/constancias" element={<Certificates />} />
            <Route path="escolares/suspension" element={<Suspension />} />
            <Route path="escolares/imss" element={<Imss />} />
            <Route path="escolares/titulacion" element={<Title />} />
            <Route path="escolares/preguntas" element={<QnA />} />
            <Route path="movilidad" element={<Movility />} />
            <Route path="movilidad/terminos" element={<GeneralConditions />} />
            <Route path="becas" element={<Scolarship />} />
            <Route path="social" element={<Social />} />
            <Route path="profesionales" element={<Practices />} />
            <Route path="tutorias" element={<Tutoring />} />
            <Route path="orientacion-psicologica" element={<PsychologicalGuidance />} />
            <Route path="bolsa-trabajo" element={<JobBoard />} />
        </Route>
    </Routes>
    
);

export default AcademicServicesRouter;