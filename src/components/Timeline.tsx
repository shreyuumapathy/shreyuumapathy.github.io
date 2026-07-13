import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
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
            <ul>
              <li>Engineered predictive data visualizations and neural network models using R and Python across complex geospatial climate datasets to accurately estimate vector distribution patterns.</li>
              <li>Synthesized modeling findings into strategic, actionable insights during weekly multidisciplinary briefs to align data outcomes with current public health literature.</li>
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
            <ul>
              <li>Managed 25+ daily patient encounters in a high-volume academic medical center while partnering with clinical leadership to optimize healthcare delivery operations.</li>
              <li>Designed and optimized structured data entry templates that improved reporting efficiency by 15% and ensured absolute data accuracy for clinical decision-making.</li>
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
            <h3 className="vertical-timeline-element-title">Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Augusta University</h4>
            <ul>
              <li>Developed interactive Tableau dashboards to translate complex behavioral and clinical datasets into actionable commercial comparisons, ensuring absolute IRB and federal regulatory audit readiness for senior leadership.</li>
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
            <h3 className="vertical-timeline-element-title">Clinical Data Management Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Augusta University</h4>
            <ul>
              <li>Maintained and audited clinical datasets for a high-profile GI cancer trends study published by the American College of Gastroenterology, ensuring regulatory-grade data quality and robust statistical validation.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;