import React, { useState } from 'react';
import './Profile.css'


function Profile() {
  const [image, setImage] = useState(null); // State to hold the image file
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setImage(file); // Store the file in state
  };
  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Profile Information</h2>
        <div className="profile-picture">
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Profile Pic" />
          ) : (
            <div className="placeholder">Add Profile Picture</div>
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <p>Full Name:<input type='texte' placeholder='name '></input></p>
        <p>Tél: <input type='texte' placeholder='123456789'></input></p>
        <p>Email: <input type='texte' placeholder='.........@gmail.com'></input></p>
        <p>Address: <input type='texte' placeholder='n°......Rue........ville......'></input></p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

export default Profile;
