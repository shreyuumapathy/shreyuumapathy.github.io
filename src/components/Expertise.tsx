import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faChartLine, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "R",
    "Python",
    "SAS",
    "SQL",
    "REDCap",
    "Qualtrics",
    "Tableau",
    "Epic Systems",
    "LLMs",
    "Prompt Engineering",
    "Microsoft Excel",
    "Google Sheets"
];

const labelsSecond = [
    "Predictive Modeling",
    "Multivariable Modeling",
    "Regression Analysis",
    "A/B Testing",
    "Survey & Experimental Design",
    "Data Visualization"
];

const labelsThird = [
    "IRB Applications",
    "FDA Regulations",
    "Literature Reviews",
    "Research Collaboration",
    "Data Quality Control",
    "Project Coordination",
    "Human Subjects Research (CITI)",
    "Biomedical Regulatory Sciences (UGA)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Analytics & Programming</h3>
                    <p>Proficient in leveraging statistical programming languages and data tools to query, clean, transform, and analyze complex datasets.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Statistical Modeling & Analysis</h3>
                    <p>Experienced in applying advanced statistical methodologies, experimental designs, and predictive modeling to draw actionable insights.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileMedical} size="3x"/>
                    <h3>Clinical Research & Operations</h3>
                    <p>Well-versed in clinical data management, regulatory compliance, data quality control, and managing research pipelines.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;