import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const SubmitIdea = () => {
  const [idea, setIdea] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [savedIdeas, setSavedIdeas] = useState([]);

  useEffect(() => {
    const storedIdeas = localStorage.getItem('ideas');
    if (storedIdeas) {
      setSavedIdeas(JSON.parse(storedIdeas));
    }
  }, []);

  const handleSubmitIdea = (e) => {
    e.preventDefault();

    // Save the idea to localStorage
    const ideas = [...savedIdeas, idea];
    localStorage.setItem('ideas', JSON.stringify(ideas));

    // Clear the input field
    setIdea('');

    // Open the modal
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    setIdea(e.target.value);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="submit-idea">
      <h2>Submit an Idea</h2>
      <form onSubmit={handleSubmitIdea}>
        <input
          type="text"
          placeholder="Enter your idea"
          value={idea}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <h3>Idea Submitted!</h3>
        <p>Your idea has been saved locally in your browser.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>

      {savedIdeas.length > 0 && (
        <div className="previously-saved">
          <h3>Previously Saved Ideas</h3>
          <ul>
            {savedIdeas.map((savedIdea, index) => (
              <li key={index}>{savedIdea}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubmitIdea;
