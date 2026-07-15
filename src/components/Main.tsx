import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import shreyuAvatar from '../assets/images/shreyu_avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={shreyuAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shreyuumapathy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shreyuumapathy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shreyu Umapathy</h1>
          <p>Healthcare Data Analyst & Consultant</p>
          
          <a 
            href="/Shreyu_Umapathy_Resume.pdf" 
            download 
            className="btn-resume" 
            style={{
              display: 'inline-block',
              marginTop: '15px',
              background: '#069494',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = '#057d7d')}
            onMouseOut={(e) => (e.currentTarget.style.background = '#069494')}
          >
            Download Resume
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/shreyuumapathy" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shreyuumapathy/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;