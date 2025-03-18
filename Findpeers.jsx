import React from 'react';
import './Findpeers.css'


const FindPeers = () => {
  const peers = [
    {
      name: 'Ama Mensah',
      university: 'University of Ghana',
      course: 'Computer Science, 3rd Year',
      interests: ['Programming', 'AI', 'Web Development'],
      imageUrl: 'path/to/ama_mensah_image.jpg', 
    },
    {
      name: 'Kofi Osei',
      university: 'KNUST',
      course: 'Computer Science, 2nd Year',
      interests: ['Data Science', 'Machine Learning'],
      imageUrl: 'path/to/kofi_osei_image.jpg', 
    },
    {
      name: 'Grace Addo',
      university: 'University of Cape Coast',
      course: 'Mathematics, 4th Year',
      interests: ['Statistics', 'Calculus', 'Research'],
      imageUrl: 'path/to/grace_addo_image.jpg', 
    },
    {
      name: 'David Annan',
      university: 'KNUST',
      course: 'Engineering, 3rd Year',
      interests: ['Robotics', 'Electronics', 'Programming'],
      imageUrl: 'path/to/david_annan_image.jpg', 
    },
    {
      name: 'Sophia Owusu',
      university: 'University of Ghana',
      course: 'Business Administration, 2nd Year',
      interests: ['Marketing', 'Finance', 'Entrepreneurship'],
      imageUrl: 'path/to/sophia_owusu_image.jpg', 
    },
    {
      name: 'Kwame Boateng',
      university: 'University of Cape Coast',
      course: 'Physics, 4th Year',
      interests: ['Quantum Physics', 'Astrophysics'],
      imageUrl: 'path/to/kwame_boateng_image.jpg',
    },
  ];

  return (
    <div className="find-peers-container">
      <h1>Find Peers</h1>
      <p className='connect-text'>
        Connect with fellow students across Ghana who share your academic interests. Find study partners, collaborate on projects, and build your academic network.
      </p>
      <div className="details-container">
          <input
            type="text"
            placeholder="Search by name, course, or interest..."
            className="search-input"
          />
          <div className='filter-row'>
          <div className="university-select">
            <p>University</p>
            <select className="filter-select">
              <option value="all">All Universities</option>
              {/* Add university options here */}
            </select>
          </div>

          <div className="courses-select">
            <p>Course/Subject</p>
            <select className="filter-select">
              <option value="all">All Courses</option>
              {/* Add course options here */}
            </select>
          </div>

          <div className="filter-box">
            <p>Advanced Filters</p>
            <button className="advanced-filters-button"> More Filters </button>
          </div>
          </div>
      </div>

      <div className="peers-found-sort-container">
        <span>6 Peers Found</span>
        <span>
          Sort by: <select className="sort-select">
            <option value="relevance">Relevance</option>
            {/* Add sort options here */}
          </select>
        </span>
      </div>

      <div className="peers-grid">
        {peers.map((peer, index) => (
          <div key={index} className="peer-card">
            <div className="peer-header">
              <img
                src={peer.imageUrl}
                alt={peer.name}
                className="peer-image"
              />
              <div>
                <strong>{peer.name}</strong>
                <p>{peer.university}</p>
              </div>
            </div>
            <p>{peer.course}</p>
            <div className="interests-container">
              {peer.interests.map((interest, i) => (
                <span key={i} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
            <div className="peer-actions">
              <button className="connect-button">Connect</button>
              <button className="message-button">Message</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <button className="pagination-button">Previous</button>
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default FindPeers;