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
          
          {/* JOB 1: Mondays Made (Current) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Retail Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Mondays Made Pte. Ltd, Singapore</h4>
            <p>
              Personalized Styling, Customer Relationship Management, Visual Merchandising, Inventory Care
            </p>
          </VerticalTimelineElement>

          {/* JOB 2: Mandai Wildlife Group (Recent Past) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2024 - Apr 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Animal Trainer / Presenter</h3>
            <h4 className="vertical-timeline-element-subtitle">Mandai Wildlife Group (Into The Wild)</h4>
            <p>
              Behavioral Training, Public Speaking & Presentation, Animal Welfare, Operational Safety
            </p>
          </VerticalTimelineElement>

          {/* JOB 3: Logiscool (Recent Past) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 - Sep 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Coding Trainer</h3>
            <h4 className="vertical-timeline-element-subtitle">Logiscool Pte Ltd, Singapore</h4>
            <p>
              Teaching Programming & Robotics, Curriculum Delivery, Student Mentorship, Troubleshooting Code
            </p>
          </VerticalTimelineElement>

          {/* JOB 4: Maestro-Net (Current/Long-term) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Maestro-Net, Singapore</h4>
            <p>
              Data Cleaning & Analysis, Visualization (Power BI), Trend Identification, Stakeholder Reporting
            </p>
          </VerticalTimelineElement>

           {/* JOB 5: LARI (Entrepreneurship) */}
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020 - Mar 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">COO & Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">LARI (Subscription Delivery Services)</h4>
            <p>
              Business Operations, Logistics Management, Website Development, Financial Tracking (Power BI)
            </p>
          </VerticalTimelineElement>

          {/* JOB 6: BITZER (Internship) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2023 - Feb 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sales Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BITZER, Singapore</h4>
            <p>
              Sales Data Interpretation, Process Automation (Python), Market Trend Analysis, Customer Reporting
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;