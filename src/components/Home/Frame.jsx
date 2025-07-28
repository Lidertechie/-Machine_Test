import React from 'react';
import './Style/FrameBox.css'; // Optional styling file

const FrameBox = () => {
  return (
    <div className="frame-box h-100">
      <h3>Content Section</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
      <ul className="mt-3">
        <li>Duis aute irure dolor in reprehenderit</li>
        <li>Voluptate velit esse cillum dolore</li>
        <li>Eu fugiat nulla pariatur</li>
      </ul>
    </div>
  );
};

export default FrameBox;