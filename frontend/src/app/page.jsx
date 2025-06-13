import React from 'react';

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#f4f4f4', color: '#333' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#007b5e', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Vishoka Welfare Foundatio242 hnnunn</h1>
        <p>Helping Hands for a Better Tomorrow</p>
      </header>

      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#005743', padding: '10px' }}>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About Us</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Projects</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Donate</a>
        <a href="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</a>
      </nav>

      {/* Main Section */}
      <main style={{ padding: '40px 20px', maxWidth: '1000px', margin: 'auto' }}>
        <section style={{ marginBottom: '30px' }}>
          <h2>Our Mission</h2>
          <p>
            At Vishoka Welfare Foundation, we strive to uplift underprivileged communities through education, healthcare,
            and empowerment initiatives. Join us in making a lasting impact.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h2>Recent Projects</h2>
          <ul>
            <li>Free Medical Camps in Rural Areas</li>
            <li>Scholarships for Underprivileged Students</li>
            <li>Women Empowerment & Skill Training</li>
          </ul>
        </section>

        <section style={{ textAlign: 'center', margin: '40px 0' }}>
          <h2>Support Our Cause</h2>
          <p>Your donation can bring hope and change to someone's life.</p>
          <button style={{
            backgroundColor: '#007b5e',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>Donate Now</button>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
        <p>&copy; 2025 Vishoka Welfare Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
