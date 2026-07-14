import React, { useState } from "react";
import survivalAnalysis from '../assets/images/survival_analysis.jpg';
import nycChsNutrition from '../assets/images/nyc_chs_nutrition.jpg';
import empowerherConnect from '../assets/images/empowerher_connect.jpg';
import llmHealthBias from '../assets/images/llm_health_bias.jpg';
import { EmpowerHerSimulator } from "./EmpowerHerSimulator";
import '../assets/styles/Project.scss';

function Project() {
    const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/shreyuumapathy/hnscc-survival-analysis" target="_blank" rel="noreferrer"><img src={survivalAnalysis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/hnscc-survival-analysis" target="_blank" rel="noreferrer"><h2>HNSCC Radiotherapy Cohort: Survival Analysis</h2></a>
                <p>Conducted survival analysis on a head and neck squamous cell carcinoma (HNSCC) radiotherapy cohort. Built Kaplan-Meier curves and fit Cox proportional hazards models using R (survival, survminer) to evaluate clinical predictors, adjusting for confounding using Directed Acyclic Graphs (DAGs).</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><img src={nycChsNutrition} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><h2>Modeling Vegetable Intake: 2019 NYC CHS</h2></a>
                <p>Conducted public health statistical modeling on the 2019 NYC Community Health Survey (NYC CHS) database. Programmatically extracted and processed SAS data in R to evaluate dietary patterns (vegetable intake) and analyzed relationships with random socio-environmental and healthcare-access covariates.</p>
            </div>

            <div className="project">
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><img src={llmHealthBias} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><h2>LLM Demographic Bias: Interaction Analysis</h2></a>
                <p>Master's Capstone Thesis evaluating demographic anchoring and status erasure in LLM-generated health narratives (CUNY SPH). Engineered a Python ETL pipeline to clean and aggregate raw scenario simulation outputs, and fit multivariable interaction models in R to quantify modifying effects of professional prestige.</p>
            </div>

            <div className="project">
                <a href="https://github.com/shreyuumapathy/empowerher-connect" target="_blank" rel="noreferrer"><img src={empowerherConnect} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/empowerher-connect" target="_blank" rel="noreferrer"><h2>EmpowerHer Connect: Health Equity Platform</h2></a>
                <p>Designed a culturally tailored digital health platform to address maternal and mental health disparities among women of color in NYC. Outlined product strategy, user flows, and implementation protocols in partnership with a community-based organization for this Consumer Health Informatics intervention.</p>
                <button 
                  onClick={() => setIsSimulatorOpen(true)}
                  style={{
                    marginTop: '12px',
                    background: '#069494',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#057d7d')}
                  onMouseOut={(e) => (e.currentTarget.style.background = '#069494')}
                >
                  Run Interactive Prototype
                </button>
            </div>
        </div>

        {isSimulatorOpen && (
          <EmpowerHerSimulator onClose={() => setIsSimulatorOpen(false)} />
        )}
    </div>
    );
}

export default Project;