import React, { useState } from "react";
import survivalAnalysis from '../assets/images/survival_analysis.jpg';
import nycChsNutrition from '../assets/images/nyc_chs_nutrition.jpg';
import empowerherConnect from '../assets/images/empowerher_connect.jpg';
import llmHealthBias from '../assets/images/llm_health_bias.jpg';
import tableauDashboard from '../assets/images/tableau_nyc_chs_dashboard.jpg';
import powerbiDashboard from '../assets/images/powerbi_llm_bias_dashboard.jpg';
import { EmpowerHerSimulator } from "./EmpowerHerSimulator";
import '../assets/styles/Project.scss';

// ============================================================================
// 🛠️ LIVE DASHBOARD CONFIGURATION
// Paste your published Tableau Public / Power BI embed links here!
// If left blank, the website will automatically display the static dashboard mockup.
// ============================================================================
const TABLEAU_EMBED_URL = ""; // Example: "https://public.tableau.com/views/YourDashboardName..."
const POWERBI_EMBED_URL = ""; // Example: "https://app.powerbi.com/view?r=YourEmbedCode..."

function Project() {
    const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
    const [activeDashboardType, setActiveDashboardType] = useState<'tableau' | 'powerbi' | null>(null);
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
      fontSize: '0.82rem',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background 0.2s',
      textAlign: 'center' as const
    };

    const secondaryBtnStyle = {
      ...btnStyle,
      background: 'transparent',
      border: '2px solid #069494',
      color: '#069494',
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.currentTarget.style.background = '#057d7d';
      e.currentTarget.style.color = '#fff';
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, isSecondary = false) => {
      if (isSecondary) {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#069494';
      } else {
        e.currentTarget.style.background = '#069494';
        e.currentTarget.style.color = '#fff';
      }
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
                  onMouseOut={(e) => handleMouseOut(e)}
                >
                  View R Analysis Code
                </a>
            </div>
            
            <div className="project">
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><img src={nycChsNutrition} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" target="_blank" rel="noreferrer"><h2>Modeling Vegetable Intake: 2019 NYC CHS</h2></a>
                <p>Conducted public health statistical modeling on the 2019 NYC Community Health Survey (NYC CHS) database. Programmatically extracted and processed SAS data in R to evaluate dietary patterns (vegetable intake) and analyzed relationships with random socio-environmental and healthcare-access covariates.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://github.com/shreyuumapathy/nyc-chs-vegetable-intake" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e)}
                  >
                    View R Scripts
                  </a>
                  <button 
                    onClick={() => {
                      setActiveDashboardType('tableau');
                      setActiveDashboardImage(tableauDashboard);
                      setActiveDashboardTitle('Tableau Dashboard: NYC Health Equity');
                    }}
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e)}
                  >
                    View Tableau Dashboard
                  </button>
                  <a 
                    href="/nyc_chs_vegetable_intake_clean.csv" 
                    download
                    style={secondaryBtnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e, true)}
                  >
                    Download Dataset (CSV)
                  </a>
                  <a 
                    href="/nyc_chs_vegetable_intake.twbx" 
                    download
                    style={secondaryBtnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e, true)}
                  >
                    Download Workbook (.twbx)
                  </a>
                </div>
            </div>

            <div className="project">
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><img src={llmHealthBias} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shreyuumapathy/llm-health-bias-research" target="_blank" rel="noreferrer"><h2>LLM Demographic Bias: Interaction Analysis</h2></a>
                <p>Master's Capstone Thesis evaluating demographic anchoring and status erasure in LLM-generated health narratives (CUNY SPH). Engineered a Python ETL pipeline to clean and aggregate raw scenario simulation outputs, and fit multivariable interaction models in R to quantify modifying effects of professional prestige.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <a 
                    href="https://github.com/shreyuumapathy/llm-health-bias-research" 
                    target="_blank" 
                    rel="noreferrer" 
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e)}
                  >
                    View ETL & R Code
                  </a>
                  <button 
                    onClick={() => {
                      setActiveDashboardType('powerbi');
                      setActiveDashboardImage(powerbiDashboard);
                      setActiveDashboardTitle('Power BI Dashboard: LLM Clinical Bias Audit');
                    }}
                    style={btnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e)}
                  >
                    View Power BI Dashboard
                  </button>
                  <a 
                    href="/llm_health_bias_clean.csv" 
                    download
                    style={secondaryBtnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e, true)}
                  >
                    Download Dataset (CSV)
                  </a>
                  <a 
                    href="/llm_clinical_bias_audit.pbix" 
                    download
                    style={secondaryBtnStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={(e) => handleMouseOut(e, true)}
                  >
                    Download Workbook (.pbix)
                  </a>
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
                  onMouseOut={(e) => handleMouseOut(e)}
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
            onClick={() => {
              setActiveDashboardImage(null);
              setActiveDashboardType(null);
            }}
          >
            <div 
              style={{
                position: 'relative',
                maxWidth: '1000px',
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
                onClick={() => {
                  setActiveDashboardImage(null);
                  setActiveDashboardType(null);
                }}
              >
                ✕
              </button>
              
              <h2 style={{ color: '#fff', margin: '0 0 15px 0', fontSize: '1.3rem', fontFamily: 'sans-serif' }}>
                {activeDashboardTitle}
              </h2>
              
              {/* Dynamic Embed iframe or Fallback Mockup Image */}
              {activeDashboardType === 'tableau' && TABLEAU_EMBED_URL ? (
                <iframe
                  src={TABLEAU_EMBED_URL}
                  title="Tableau Interactive Dashboard"
                  style={{ width: '100%', height: '70vh', border: 'none', borderRadius: '6px' }}
                />
              ) : activeDashboardType === 'powerbi' && POWERBI_EMBED_URL ? (
                <iframe
                  src={POWERBI_EMBED_URL}
                  title="Power BI Interactive Dashboard"
                  style={{ width: '100%', height: '70vh', border: 'none', borderRadius: '6px' }}
                />
              ) : (
                <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
                  <img 
                    src={activeDashboardImage} 
                    alt="Dashboard Mockup" 
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      maxHeight: '65vh', 
                      borderRadius: '6px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      objectFit: 'contain'
                    }} 
                  />
                  <p style={{ color: '#069494', margin: '10px 0 0 0', fontSize: '0.85rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                    ⚙️ Mockup Preview Mode (Fallback Active)
                  </p>
                </div>
              )}
              
              <p style={{ color: '#aaa', margin: '15px 0 0 0', fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.4', fontFamily: 'sans-serif' }}>
                {(activeDashboardType === 'tableau' && !!TABLEAU_EMBED_URL) || (activeDashboardType === 'powerbi' && !!POWERBI_EMBED_URL) ? (
                  <span>💡 <strong>Live Connection Active:</strong> You are interacting with the actual published cloud report instance. Hover and filter variables to explore.</span>
                ) : (
                  <span>💡 <strong>Recruiter Notice:</strong> Paste your published cloud dashboard URL inside <code>src/components/Project.tsx</code> (lines 13-14) to replace this static mockup with your fully live, interactive cloud report.</span>
                )}
              </p>
            </div>
          </div>
        )}
    </div>
    );
}

export default Project;