// src/pages/AdminSettings.js
import React, { useState } from 'react';
import '../css/Settings.css';

const AdminSettings = () => {
  const [portalName, setPortalName] = useState('');
  const [brandingColor, setBrandingColor] = useState('#ffffff');
  const [logo, setLogo] = useState(null);
  const [adminAccess, setAdminAccess] = useState('all');
  const [featureAccess, setFeatureAccess] = useState('all');
  const [backupFile, setBackupFile] = useState(null);

  const handlePortalSettingsSubmit = (e) => {
    e.preventDefault();
    // Handle saving portal settings
    console.log('Portal Settings:', { portalName, brandingColor, logo });
  };

  const handleAccessControlSubmit = (e) => {
    e.preventDefault();
    // Handle saving access control settings
    console.log('Access Control:', { adminAccess, featureAccess });
  };

  const handleBackupSubmit = (e) => {
    e.preventDefault();
    // Handle backup now action
    console.log('Backup Now');
  };

  const handleRestoreSubmit = (e) => {
    e.preventDefault();
    // Handle restore from backup
    console.log('Restore from Backup:', backupFile);
  };

  return (
    <div className="settings-container">
      <h2>Admin Settings and Configuration</h2>
      <div className="settings-section">
        <h3>Portal Settings</h3>
        <form className="settings-form" onSubmit={handlePortalSettingsSubmit}>
          <label>
            Portal Name:
            <input
              type="text"
              name="portalName"
              value={portalName}
              onChange={(e) => setPortalName(e.target.value)}
              placeholder="Enter portal name"
              required
            />
          </label>
          <label>
            Branding Color:
            <input
              type="color"
              name="brandingColor"
              value={brandingColor}
              onChange={(e) => setBrandingColor(e.target.value)}
              required
            />
          </label>
          <label>
            Logo:
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </label>
          <button type="submit">Save Settings</button>
        </form>
      </div>
      <div className="settings-section">
        <h3>Access Control</h3>
        <form className="settings-form" onSubmit={handleAccessControlSubmit}>
          <label>
            Admin Access:
            <select value={adminAccess} onChange={(e) => setAdminAccess(e.target.value)} required>
              <option value="all">All Admins</option>
              <option value="specific">Specific Admins</option>
            </select>
          </label>
          <label>
            Feature Access:
            <select value={featureAccess} onChange={(e) => setFeatureAccess(e.target.value)} required>
              <option value="all">All Features</option>
              <option value="specific">Specific Features</option>
            </select>
          </label>
          <button type="submit">Save Access Control</button>
        </form>
      </div>
      <div className="settings-section">
        <h3>Backup and Restore</h3>
        <form className="settings-form" onSubmit={handleBackupSubmit}>
          <button type="submit">Backup Now</button>
        </form>
        <form className="settings-form" onSubmit={handleRestoreSubmit}>
          <label>
            Restore from Backup:
            <input
              type="file"
              name="backupFile"
              accept=".zip,.tar,.gz"
              onChange={(e) => setBackupFile(e.target.files[0])}
              required
            />
          </label>
          <button type="submit">Restore</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettings;
