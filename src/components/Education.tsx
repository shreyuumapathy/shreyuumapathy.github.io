import React from "react";
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div className="education-container" id="education">
      <div className="education-grid">
        
        {/* Left Column: Education & Credentials */}
        <div>
          <h1 style={{ marginBottom: '30px' }}>Education & Credentials</h1>
          
          <div className="education-card">
            <h3>CUNY Graduate School of Public Health</h3>
            <h4>Master of Public Health (MPH) in Epidemiology & Biostatistics • 2026</h4>
            <p>Focus on advanced quantitative methodologies, epidemiologic research methods, and biostatistics modeling. Capstone presenter on LLM clinical narrative bias.</p>
          </div>

          <div className="education-card">
            <h3>University of Georgia</h3>
            <h4>Graduate Certificate in Biomedical Regulatory Sciences • 2024</h4>
            <p>Rigorous training in FDA pharmaceutical and medical device pathways, regulatory writing, clinical trial design, Good Clinical Practice (GCP) guidelines, and compliance standards.</p>
          </div>

          <div className="education-card">
            <h3>University of Georgia</h3>
            <h4>PharmD Coursework • 2023 - 2024</h4>
            <p>Completed intensive coursework in clinical pharmacology, therapeutics, and clinical trial design prior to pursuing advanced epidemiologic research.</p>
          </div>
        </div>

        {/* Right Column: Publications & Presentations */}
        <div>
          <h1 style={{ marginBottom: '30px' }}>Research & Publications</h1>

          <div className="publication-card">
            <a 
              href="https://journals.lww.com/ajg/fulltext/10.14309/01.ajg.0000779028.58257.b2~s1374minority-and-womens-health-disparities-small-intestinal" 
              target="_blank" 
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <h3 
                style={{ cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Small Intestinal Cancer Regional Trends Study
              </h3>
            </a>
            <h4>Co-Author • American College of Gastroenterology (ACG) Journal</h4>
            <p>Performed data cleansing, normalization, and auditing of SEER study variables. Partnered with lead biostatisticians to prepare multi-center clinical cohorts for multivariable regression modeling in SAS.</p>
            <a 
              href="https://journals.lww.com/ajg/fulltext/10.14309/01.ajg.0000779028.58257.b2~s1374minority-and-womens-health-disparities-small-intestinal" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                color: '#069494',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
            >
              Read Publication →
            </a>
          </div>

          <div className="publication-card">
            <h3>Demographic Anchoring in LLM Narratives</h3>
            <h4>Presenter • CUNY SPH Capstone</h4>
            <p>Presented research findings evaluating clinical bias and status erasure in generative AI models. Quantified demographic differences in appraisal scores using multivariable interaction linear models in R.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
