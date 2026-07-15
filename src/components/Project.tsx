import React, { useState } from "react";
import survivalAnalysis from '../assets/images/survival_analysis.jpg';
import nycChsNutrition from '../assets/images/nyc_chs_nutrition.jpg';
import empowerherConnect from '../assets/images/empowerher_connect.jpg';
import llmHealthBias from '../assets/images/llm_health_bias.jpg';
import tableauDashboard from '../assets/images/tableau_nyc_chs_dashboard.jpg';
import powerbiDashboard from '../assets/images/powerbi_llm_bias_dashboard.jpg';
import { EmpowerHerSimulator } from "./EmpowerHerSimulator";
import '../assets/styles/Project.scss';

function Project() {
    const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
    const [activeDashboardImage, setActiveDashboardImage] = useState<string | null>(null);
    const [activeDashboardTitle, setActiveDashboardTitle] = useState<string>('');

    const btnStyle = {
      display: 'inline-block',
      marginTop: '15px',
      background: '#069494',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '0.85rem',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background 0.2s',
      textAlign: 'center' as const
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.currentTarget.style.background = '#057d7d';
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.currentTarget.style.background = '#069494';
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/shreyuumapathy/hnscc-survival-analysis" target="_blank" rel="noreferrer"><img src={survivalAnalysis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/hnscc-survival-analysis" target="_blank" rel="noreferrer"><h2>HNSCC Radiotherapy Cohort: Survival Analysis</h2></a>
                <p>Conducted survival analysis on a head and neck squamous cell carcinoma (HNSCC) radiotherapy cohort. Built Kaplan-Meier curves and fit Cox proportional hazards models using R (survival, survminer) to evaluate clinical predictors, adjusting for confounding using Directed Acyclic Graphs (DAGs).</p>
                <a 
                  href="https://github.com/shreyuumapathy/hnscc-survival-analysis" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={btnStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  View R Analysis Code
                </a>
            </div>
            
            <div className="project">
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><img src={nycChsNutrition} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><h2>Modeling Vegetable Intake: 2019 NYC CHS</h2></a>
                <p>Conducted public health statistical modeling on the 2019 NYC Community Health Survey (NYC CHS) database. Programmatically extracted and processed SAS data in R to evaluate dietary patterns (vegetable intake) and analyzed relationships with random socio-environmental and healthcare-access covariates.</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    View Statistical R Scripts
                  </a>
                  <button 
                    onClick={() => {
                      setActiveDashboardImage(tableauDashboard);
                      setActiveDashboardTitle('Tableau Dashboard: NYC Health Equity');
                    }}
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    View Tableau Dashboard
                  </button>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><img src={llmHealthBias} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><h2>LLM Demographic Bias: Interaction Analysis</h2></a>
                <p>Master's Capstone Thesis evaluating demographic anchoring and status erasure in LLM-generated health narratives (CUNY SPH). Engineered a Python ETL pipeline to clean and aggregate raw scenario simulation outputs, and fit multivariable interaction models in R to quantify modifying effects of professional prestige.</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://github.com/shreyuumapathy/llm-health-bias-research" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    View ETL & R Modeling Code
                  </a>
                  <button 
                    onClick={() => {
                      setActiveDashboardImage(powerbiDashboard);
                      setActiveDashboardTitle('Power BI Dashboard: LLM Clinical Bias Audit');
                    }}
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    View Power BI Dashboard
                  </button>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/shreyuumapathy/empowerher-connect" target="_blank" rel="noreferrer"><img src={empowerherConnect} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/empowerher-connect" target="_blank" rel="noreferrer"><h2>EmpowerHer Connect: Health Equity Platform</h2></a>
                <p>Designed a culturally tailored digital health platform to address maternal and mental health disparities among women of color in NYC. Outlined product strategy, user flows, and implementation protocols in partnership with a community-based organization for this Consumer Health Informatics intervention.</p>
                <button 
                  onClick={() => setIsSimulatorOpen(true)}
                  style={btnStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  Run Interactive Prototype
                </button>
            </div>
        </div>

        {isSimulatorOpen && (
          <EmpowerHerSimulator onClose={() => setIsSimulatorOpen(false)} />
        )}

        {activeDashboardImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 99999999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
              boxSizing: 'border-box'
            }} 
            onClick={() => setActiveDashboardImage(null)}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                backgroundColor: '#111',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #333'
              }} 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  zIndex: 100
                }} 
                onClick={() => setActiveDashboardImage(null)}
              >
                ✕
              </button>
              
              <h2 style={{ color: '#fff', margin: '0 0 15px 0', fontSize: '1.3rem', fontFamily: 'sans-serif' }}>
                {activeDashboardTitle}
              </h2>
              
              <img 
                src={activeDashboardImage} 
                alt="Dashboard Mockup" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '70vh', 
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  objectFit: 'contain'
                }} 
              />
              
              <p style={{ color: '#aaa', margin: '15px 0 0 0', fontSize: '0.85rem', textAlign: 'center', lineHeight: '1.4', fontFamily: 'sans-serif' }}>
                💡 <strong>Interactive Mockup:</strong> This dashboard evaluates and visualizes cohort study parameters. In a live production environment, this is published via Tableau Public or Power BI Service and embedded directly as an interactive HTML iframe.
              </p>
            </div>
          </div>
        )}
    </div>
    );
}

export default Project;