import React, { useState } from 'react';
import './SHGSurvey.css';

const SHGSurvey = () => {
  const [numMembers, setNumMembers] = useState('');
  const [memberIDs, setMemberIDs] = useState([]);
  const [formData, setFormData] = useState({
    groupName: '',
    leaderName: '',
    location: '',
    bankFunds: '',
    currentLoans: '',
    businessMembers: ''
  });

  const handleNumMembersChange = (e) => {
    const num = e.target.value;
    setNumMembers(num);
    setMemberIDs(Array.from({ length: num }, (_, i) => ({ id: i + 1, value: '' })));
  };

  const handleMemberIDChange = (index, value) => {
    const newMemberIDs = [...memberIDs];
    newMemberIDs[index].value = value;
    setMemberIDs(newMemberIDs);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      numMembers,
      memberIDs: memberIDs.map((member) => member.value)
    };
    console.log('Form Data Submitted:', finalFormData);
    alert('Survey Submitted Successfully!');
    // Clear the form after submission
    setNumMembers('');
    setMemberIDs([]);
    setFormData({
      groupName: '',
      leaderName: '',
      location: '',
      bankFunds: '',
      currentLoans: '',
      businessMembers: ''
    });
  };

  return (
    <div className="container">
      <h1>Self Help Group Survey</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="groupName">Name of the Group:</label>
        <input
          type="text"
          id="groupName"
          name="groupName"
          value={formData.groupName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="numMembers">Number of Current Members:</label>
        <input
          type="number"
          id="numMembers"
          name="numMembers"
          value={numMembers}
          onChange={handleNumMembersChange}
          required
        />

        {memberIDs.map((member, index) => (
          <div key={index} className="member-id-container">
            <label htmlFor={`memberID${member.id}`}>Member ID {member.id}:</label>
            <input
              type="text"
              id={`memberID${member.id}`}
              name={`memberID${member.id}`}
              value={member.value}
              onChange={(e) => handleMemberIDChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        <label htmlFor="leaderName">Leader Name:</label>
        <input
          type="text"
          id="leaderName"
          name="leaderName"
          value={formData.leaderName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="bankFunds">Bank Funds:</label>
        <input
          type="number"
          id="bankFunds"
          name="bankFunds"
          value={formData.bankFunds}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="currentLoans">Current Loans:</label>
        <input
          type="number"
          id="currentLoans"
          name="currentLoans"
          value={formData.currentLoans}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="businessMembers">How Many Members Started Businesses?:</label>
        <input
          type="number"
          id="businessMembers"
          name="businessMembers"
          value={formData.businessMembers}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SHGSurvey;
