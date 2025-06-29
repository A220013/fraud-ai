// src/pages/Dashboard/DashboardPage.tsx
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  const fraudTypes = [
    {
      title: "Phishing Scams",
      description: "Fake emails or websites that steal your information",
      icon: "📧",
      tips: ["Never click suspicious links", "Verify sender addresses", "Don't share passwords via email"]
    },
    {
      title: "Phone Scams",
      description: "Fraudulent calls claiming to be from legitimate organizations",
      icon: "📞",
      tips: ["Hang up on suspicious calls", "Never share personal info", "Block unknown numbers"]
    },
    {
      title: "Online Shopping Fraud",
      description: "Fake websites or sellers that take your money",
      icon: "🛒",
      tips: ["Use secure websites (https://)", "Avoid too-good-to-be-true deals", "Use credit cards for protection"]
    },
    {
      title: "Investment Fraud",
      description: "Fake investment opportunities with guaranteed returns",
      icon: "💰",
      tips: ["Research before investing", "Beware of pressure tactics", "Consult licensed advisors"]
    },
    {
      title: "Identity Theft",
      description: "Stealing your personal information for financial gain",
      icon: "🆔",
      tips: ["Use strong passwords", "Enable 2FA", "Monitor credit reports"]
    },
    {
      title: "Social Media Scams",
      description: "Fake profiles and fraudulent offers on social platforms",
      icon: "📱",
      tips: ["Verify friend requests", "Don't share personal info", "Be skeptical of offers"]
    }
  ];

  const emergencyContacts = [
    { name: "Federal Trade Commission", number: "1-877-FTC-HELP", url: "https://ftc.gov/complaint" },
    { name: "Internet Crime Complaint Center", number: "1-800-251-3221", url: "https://ic3.gov" },
    { name: "Credit Bureaus", number: "1-877-322-8228", url: "https://annualcreditreport.com" }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>🛡️ Anti-Fraud Dashboard</h1>
        <p>Your comprehensive guide to fraud prevention and protection</p>
      </div>

      <div className="dashboard-content">
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/chat" className="action-button primary">
              💬 Chat with AI Assistant
            </Link>
            <button className="action-button secondary">
              📋 Check Your Credit Report
            </button>
            <button className="action-button secondary">
              🔒 Freeze Your Credit
            </button>
          </div>
        </div>

        <div className="fraud-types-section">
          <h2>Common Fraud Types</h2>
          <div className="fraud-types-grid">
            {fraudTypes.map((fraud, index) => (
              <div key={index} className="fraud-type-card">
                <div className="fraud-icon">{fraud.icon}</div>
                <h3>{fraud.title}</h3>
                <p>{fraud.description}</p>
                <div className="fraud-tips">
                  <h4>Prevention Tips:</h4>
                  <ul>
                    {fraud.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-section">
          <h2>🚨 Emergency Contacts</h2>
          <p>If you've been a victim of fraud, contact these organizations immediately:</p>
          <div className="emergency-contacts">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <h3>{contact.name}</h3>
                <p className="contact-number">{contact.number}</p>
                <a href={contact.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="safety-tips">
          <h2>🔒 General Safety Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Password Security</h3>
              <ul>
                <li>Use unique passwords for each account</li>
                <li>Enable two-factor authentication</li>
                <li>Use a password manager</li>
                <li>Change passwords regularly</li>
              </ul>
            </div>
            <div className="tip-card">
              <h3>Online Safety</h3>
              <ul>
                <li>Use secure websites (https://)</li>
                <li>Keep software updated</li>
                <li>Use antivirus software</li>
                <li>Be cautious with public WiFi</li>
              </ul>
            </div>
            <div className="tip-card">
              <h3>Financial Protection</h3>
              <ul>
                <li>Monitor bank statements regularly</li>
                <li>Use credit cards for online purchases</li>
                <li>Set up fraud alerts</li>
                <li>Shred sensitive documents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;