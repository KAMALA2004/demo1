import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [status, setStatus] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [gender, setGender] = useState('');
  const [tag, setTag] = useState('');
  const [tenthScore, setTenthScore] = useState('');
  const [twelfthScore, setTwelfthScore] = useState('');
  const [diploma, setDiploma] = useState('');
  const [undergraduate, setUndergraduate] = useState('');
  const [postgraduate, setPostgraduate] = useState('');
  const [backlogsHistory, setBacklogsHistory] = useState('');
  const [currentBacklogs, setCurrentBacklogs] = useState('');
  const [interestedInPlacement, setInterestedInPlacement] = useState('');
  const [workExperience, setWorkExperience] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      username,
      email,
      phone,
      dob,
      status,
      registration_number: registrationNumber,
      gender,
      tag,
      tenth_score: tenthScore,
      twelfth_score: twelfthScore,
      diploma,
      undergraduate,
      postgraduate,
      backlogs_history: backlogsHistory,
      current_backlogs: currentBacklogs,
      interested_in_placement: interestedInPlacement,
      work_experience: workExperience,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/add_student', studentData);
      if (response.data.success) {
        alert('Student profile added successfully');
        // Reset form fields
        setUsername('');
        setEmail('');
        setPhone('');
        setDob('');
        setStatus('');
        setRegistrationNumber('');
        setGender('');
        setTag('');
        setTenthScore('');
        setTwelfthScore('');
        setDiploma('');
        setUndergraduate('');
        setPostgraduate('');
        setBacklogsHistory('');
        setCurrentBacklogs('');
        setInterestedInPlacement('');
        setWorkExperience('');
      } else {
        alert('Error adding student profile');
      }
    } catch (error) {
      console.error('There was an error adding the student!', error);
      alert('Error adding student profile');
    }
  };

  return (
    <div>
      <h2>Add Student Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label>Registration Number:</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <label>Tag:</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div>
          <label>Tenth Score:</label>
          <input
            type="number"
            step="0.01"
            value={tenthScore}
            onChange={(e) => setTenthScore(e.target.value)}
          />
        </div>
        <div>
          <label>Twelfth Score:</label>
          <input
            type="number"
            step="0.01"
            value={twelfthScore}
            onChange={(e) => setTwelfthScore(e.target.value)}
          />
        </div>
        <div>
          <label>Diploma:</label>
          <input
            type="text"
            value={diploma}
            onChange={(e) => setDiploma(e.target.value)}
          />
        </div>
        <div>
          <label>Undergraduate:</label>
          <input
            type="text"
            value={undergraduate}
            onChange={(e) => setUndergraduate(e.target.value)}
          />
        </div>
        <div>
          <label>Postgraduate:</label>
          <input
            type="text"
            value={postgraduate}
            onChange={(e) => setPostgraduate(e.target.value)}
          />
        </div>
        <div>
          <label>Backlogs History:</label>
          <input
            type="text"
            value={backlogsHistory}
            onChange={(e) => setBacklogsHistory(e.target.value)}
          />
        </div>
        <div>
          <label>Current Backlogs:</label>
          <input
            type="number"
            value={currentBacklogs}
            onChange={(e) => setCurrentBacklogs(e.target.value)}
          />
        </div>
        <div>
          <label>Interested in Placement:</label>
          <select
            value={interestedInPlacement}
            onChange={(e) => setInterestedInPlacement(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Work Experience:</label>
          <textarea
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default Dashboard;
