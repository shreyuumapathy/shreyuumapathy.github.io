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
            <p>Focus on advanced quantitative methodologies, epidemiologic research methods, and biostatistics modeling. Capstone Colloquium presenter on LLM clinical narrative bias.</p>
          </div>

          <div className="education-card">
            <h3>University of Georgia</h3>
            <h4>Graduate Certificate in Biomedical Regulatory Sciences • 2024</h4>
            <p>Rigorous training in FDA pharmaceutical and medical device pathways, regulatory writing, clinical trial design, Good Clinical Practice (GCP) guidelines, and compliance standards.</p>
          </div>

          <div className="education-card">
            <h3>University of Georgia</h3>
            <h4>PharmD / MS Dual Degree Pathway • 2023 - 2024</h4>
            <p>Completed intensive training in clinical pharmacology, therapeutics, and clinical trial design prior to pursuing advanced epidemiologic research.</p>
          </div>
        </div>

        {/* Right Column: Publications & Presentations */}
        <div>
          <h1 style={{ marginBottom: '30px' }}>Research & Publications</h1>

          <div className="publication-card">
            <h3>Small Intestinal Cancer Regional Trends Study</h3>
            <h4>Co-Author • American College of Gastroenterology (ACG) Journal</h4>
            <p>Performed data cleansing, normalization, and auditing of SEER study variables. Partnered with lead biostatisticians to prepare multi-center clinical cohorts for multivariable regression modeling in SAS.</p>
          </div>

          <div className="publication-card">
            <h3>Demographic Anchoring in LLM Narratives</h3>
            <h4>Presenter • CUNY SPH Capstone Colloquium</h4>
            <p>Presented research findings evaluating clinical bias and status erasure in generative AI models. Quantified demographic differences in appraisal scores using multivariable interaction linear models in R.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
