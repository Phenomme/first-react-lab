import React from 'react';

const Portfolio = () => {
  const name = "Michael";
  const bio = "I'm a fresh developer learning to create user-friendly applications.";
  const mySkills = [
    { name: 'JavaScript', comfort: 4, frontEnd: true, backend: true },
    { name: 'CSS', comfort: 6, frontEnd: true, backend: false },
    { name: 'HTML', comfort: 6, frontEnd: true, backend: false },
  ];
  const contact = "medwards5154@gmail.com";
  const containerStyle = { fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' };
  const headerStyle = { textAlign: 'center' };
  const listStyle = { padding: '10px', marginBottom: '10px', listStyleType: 'none' };
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{name}'s Portfolio</h1>
      <p>{bio}</p>
      <h2>Skills</h2>
      <ul>
        {mySkills.map((skill, index) => (
          <li key={index} style={listStyle}>
            {skill.name} - Comfort Level: {skill.comfort}
          </li>
        ))}
      </ul>
      <h2>Contact</h2>
      <p>Email: {contact}</p>
    </div>
  );
};

export default Portfolio;