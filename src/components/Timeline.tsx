import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={
              (<span>
                Sept 2025 - Feb 2026
                <span style={{ display: 'block', fontSize: '0.85em', fontWeight: 'normal', marginTop: '4px' }}>New York City, NY</span>
              </span>) as any
            }
            iconStyle={{ background: '#069494', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Public Health Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Evolutionary Health Group (NCBI)</h4>
            <div className="mobile-timeline-meta">
              <span>New York City, NY</span>
              <span> • </span>
              <span>Sept 2025 - Feb 2026</span>
            </div>
            <ul>
              <li>Engineered predictive data visualizations and neural network models using R and Python across complex geospatial climate datasets to accurately estimate vector distribution patterns.</li>
              <li>Synthesized and presented modeling findings during weekly multidisciplinary briefs to align predictive data outcomes with current public health literature and inform director-level decision-making.</li>
              <li>Managed database preprocessing, quality controls, and geospatial file transformation pipelines, increasing analysis reproducibility.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={
              (<span>
                Dec 2024 - Sept 2025
                <span style={{ display: 'block', fontSize: '0.85em', fontWeight: 'normal', marginTop: '4px' }}>New York City, NY</span>
              </span>) as any
            }
            iconStyle={{ background: '#069494', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Medical Scribe</h3>
            <h4 className="vertical-timeline-element-subtitle">Weill Cornell (Scribe America)</h4>
            <div className="mobile-timeline-meta">
              <span>New York City, NY</span>
              <span> • </span>
              <span>Dec 2024 - Sept 2025</span>
            </div>
            <ul>
              <li>Partnered with clinical leadership to optimize healthcare delivery operations across 25+ daily patient encounters; designed structured documentation templates that improved reporting efficiency by 15%.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={
              (<span>
                Jan 2022 - Dec 2022
                <span style={{ display: 'block', fontSize: '0.85em', fontWeight: 'normal', marginTop: '4px' }}>Augusta, GA</span>
              </span>) as any
            }
            iconStyle={{ background: '#069494', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Augusta University</h4>
            <div className="mobile-timeline-meta">
              <span>Augusta, GA</span>
              <span> • </span>
              <span>Jan 2022 - Dec 2022</span>
            </div>
            <ul>
              <li>Developed interactive Tableau dashboards to translate complex behavioral research data into actionable comparisons, facilitating executive decision-making.</li>
              <li>Managed clinical database administration and data cleaning protocols in REDCap, maintaining database integrity and audit histories to ensure readiness for institutional IRB reviews and federal regulatory audits.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={
              (<span>
                May 2021 - Dec 2021
                <span style={{ display: 'block', fontSize: '0.85em', fontWeight: 'normal', marginTop: '4px' }}>Augusta, GA</span>
              </span>) as any
            }
            iconStyle={{ background: '#069494', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Clinical Data Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Augusta University</h4>
            <div className="mobile-timeline-meta">
              <span>Augusta, GA</span>
              <span> • </span>
              <span>May 2021 - Dec 2021</span>
            </div>
            <ul>
              <li>Managed and cleaned clinical datasets for a national Small Intestinal Cancer regional trends study published in the American College of Gastroenterology (ACG) journal.</li>
              <li>Performed comprehensive database audits and quality control checks to ensure regulatory compliance, partnering with lead biostatisticians to prepare clinical trial datasets for multivariable regression in SAS.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;