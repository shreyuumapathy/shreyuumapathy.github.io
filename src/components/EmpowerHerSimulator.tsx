import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faHeart, 
  faSearch, 
  faComments, 
  faTimes, 
  faUserMd, 
  faUserCircle, 
  faHeartbeat 
} from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/EmpowerHerSimulator.scss';

interface SimulatorProps {
  onClose: () => void;
}

export function EmpowerHerSimulator({ onClose }: SimulatorProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'tracker' | 'care' | 'community'>('home');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  // Checklist State
  const [checklist, setChecklist] = useState({
    vitamins: false,
    water: false,
    meditation: false,
  });

  // Mock Community Feed Likes
  const [likes, setLikes] = useState([14, 28]);
  const [liked, setLiked] = useState([false, false]);

  const toggleChecklist = (item: 'vitamins' | 'water' | 'meditation') => {
    setChecklist({ ...checklist, [item]: !checklist[item] });
  };

  const handleLike = (index: number) => {
    const newLiked = [...liked];
    const newLikes = [...likes];
    
    if (newLiked[index]) {
      newLikes[index] -= 1;
    } else {
      newLikes[index] += 1;
    }
    
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
    setLikes(newLikes);
  };

  return (
    <div className="simulator-overlay" onClick={onClose}>
      <button className="close-simulator-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="simulator-container" onClick={(e) => e.stopPropagation()}>

        <div className="phone-screen">
          {/* Header */}
          <div className="phone-header">
            <h2>EmpowerHer Connect</h2>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </div>

          {/* Body Content */}
          <div className="phone-body">
            
            {/* 1. HOME TAB */}
            {activeTab === 'home' && (
              <div>
                <div className="welcome-card">
                  <h3>Welcome, Aisha!</h3>
                  <p>You are 24 weeks pregnant. Your baby is the size of a cantaloupe! 🍈</p>
                </div>

                <div className="welcome-card" style={{ background: '#f0f9f9', borderLeft: '4px solid #069494' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', color: '#069494' }}>Tip of the Day</h4>
                  <p style={{ fontSize: '0.8rem', color: '#555' }}>Remember to stretch for 5 minutes before bed to ease lower back tension and improve sleep quality.</p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>Quick Actions</h4>
                  
                  <div className="feature-link" onClick={() => setActiveTab('tracker')}>
                    <div className="icon-box">
                      <FontAwesomeIcon icon={faHeartbeat} />
                    </div>
                    <div className="text-box">
                      <h4>Wellness Check-In</h4>
                      <p>Log your daily mood & vitamins</p>
                    </div>
                  </div>

                  <div className="feature-link" onClick={() => setActiveTab('care')}>
                    <div className="icon-box" style={{ background: '#c27d53' }}>
                      <FontAwesomeIcon icon={faUserMd} />
                    </div>
                    <div className="text-box">
                      <h4>Find Doulas & OB/GYNs</h4>
                      <p>Connect with providers in Harlem</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. TRACKER TAB */}
            {activeTab === 'tracker' && (
              <div>
                <div className="mood-picker">
                  <h4>How is your mental wellness today?</h4>
                  <div className="emoji-row">
                    {['😔', '😐', '😊', '😁', '✨'].map((emoji, idx) => (
                      <button 
                        key={idx} 
                        className={`emoji-btn ${selectedMood === emoji ? 'active' : ''}`}
                        onClick={() => setSelectedMood(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                  {selectedMood && (
                    <p style={{ marginTop: '12px', fontSize: '0.8rem', color: '#069494', fontWeight: 'bold' }}>
                      Thank you for logging. Let's do your checklist!
                    </p>
                  )}
                </div>

                <div className="tracker-checklist">
                  <h4>Daily Wellness Check</h4>
                  
                  <label className="checklist-item">
                    <input 
                      type="checkbox" 
                      checked={checklist.vitamins} 
                      onChange={() => toggleChecklist('vitamins')} 
                    />
                    Took prenatal vitamins
                  </label>

                  <label className="checklist-item">
                    <input 
                      type="checkbox" 
                      checked={checklist.water} 
                      onChange={() => toggleChecklist('water')} 
                    />
                    Drank 8 cups of water
                  </label>

                  <label className="checklist-item">
                    <input 
                      type="checkbox" 
                      checked={checklist.meditation} 
                      onChange={() => toggleChecklist('meditation')} 
                    />
                    15-minute mindfulness breathing
                  </label>
                </div>
              </div>
            )}

            {/* 3. FIND CARE TAB */}
            {activeTab === 'care' && (
              <div>
                <div className="search-bar">
                  <FontAwesomeIcon icon={faSearch} style={{ color: '#aaa' }} />
                  <input type="text" placeholder="Search doulas, midwifes, OB/GYNs..." />
                </div>

                <div className="provider-card">
                  <h4>Dr. Sarah Jenkins, OB/GYN</h4>
                  <p>Harlem Women's Health Center (0.8 miles away)</p>
                  <div className="tag-row">
                    <span className="tag">Medicaid Accepted</span>
                    <span className="tag">Implicit Bias Trained</span>
                  </div>
                </div>

                <div className="provider-card" style={{ borderLeftColor: '#c27d53' }}>
                  <h4>Aisha Rahman, Certified Doula</h4>
                  <p>NYC Birth Equity Network (1.2 miles away)</p>
                  <div className="tag-row">
                    <span className="tag">Black-owned</span>
                    <span className="tag">Bilingual (English/Spanish)</span>
                  </div>
                </div>
              </div>
            )}

            {/* 4. COMMUNITY TAB */}
            {activeTab === 'community' && (
              <div>
                <div className="post-card">
                  <div className="post-header">
                    <div className="avatar">MJ</div>
                    <div className="meta">
                      <h5>Maya Jackson</h5>
                      <span>Harlem, NY • 2h ago</span>
                    </div>
                  </div>
                  <p>First-time mom here! Feeling slightly anxious about entering my third trimester next week. Anyone else going to the community prenatal yoga tomorrow?</p>
                  <div className="post-actions">
                    <button 
                      className={liked[0] ? 'liked' : ''} 
                      onClick={() => handleLike(0)}
                    >
                      <FontAwesomeIcon icon={faHeart} /> {likes[0]} Likes
                    </button>
                  </div>
                </div>

                <div className="post-card">
                  <div className="post-header">
                    <div className="avatar" style={{ background: '#c27d53', color: '#fff' }}>TC</div>
                    <div className="meta">
                      <h5>Tanya Carter</h5>
                      <span>Bronx, NY • 5h ago</span>
                    </div>
                  </div>
                  <p>Shoutout to Aisha Rahman (Doula) from the directory! She advocated for me in the delivery room yesterday and it made all the difference. Baby girl is healthy! ❤️</p>
                  <div className="post-actions">
                    <button 
                      className={liked[1] ? 'liked' : ''} 
                      onClick={() => handleLike(1)}
                    >
                      <FontAwesomeIcon icon={faHeart} /> {likes[1]} Likes
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer Tabs */}
          <div className="phone-footer">
            <button className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
              <FontAwesomeIcon icon={faHome} />
              Home
            </button>
            <button className={`tab-btn ${activeTab === 'tracker' ? 'active' : ''}`} onClick={() => setActiveTab('tracker')}>
              <FontAwesomeIcon icon={faHeartbeat} />
              Tracker
            </button>
            <button className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`} onClick={() => setActiveTab('care')}>
              <FontAwesomeIcon icon={faUserMd} />
              Care
            </button>
            <button className={`tab-btn ${activeTab === 'community' ? 'active' : ''}`} onClick={() => setActiveTab('community')}>
              <FontAwesomeIcon icon={faComments} />
              Feed
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
