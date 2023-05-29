import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import IdeaList from './IdeaList';

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

  // const handleSubmitIdea = (e) => {
  //   e.preventDefault();

  //   const ideas = [...savedIdeas, idea];
  //   setSavedIdeas(ideas);
  //   localStorage.setItem('ideas', JSON.stringify(ideas));

  //   setIdea('');
  //   setModalOpen(true);
  // };

  const handleSubmitIdea = (e) => {
    e.preventDefault();
  
    const currentDate = new Date().toLocaleDateString();
    const ideaWithDate = `${idea} (Added on ${currentDate})`;
  
    // Save the idea with date to localStorage
    const ideas = [...savedIdeas, ideaWithDate];
    setSavedIdeas(ideas);
    localStorage.setItem('ideas', JSON.stringify(ideas));
  
    // Clear the input field
    setIdea('');
  
    // Open the modal
    setModalOpen(true);
  };
  

  const handleEditIdea = (index, updatedIdea) => {
    const updatedIdeas = [...savedIdeas];
    updatedIdeas[index] = updatedIdea;
    setSavedIdeas(updatedIdeas);
    localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
  };

  const handleDeleteIdea = (index) => {
    const updatedIdeas = savedIdeas.filter((_, i) => i !== index);
    setSavedIdeas(updatedIdeas);
    localStorage.setItem('ideas', JSON.stringify(updatedIdeas));
  };

  const handleInputChange = (e) => {
    setIdea(e.target.value);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="submit-idea">
      <h2>Adds Idea/Task in Local Browser Cache</h2>
      <form onSubmit={handleSubmitIdea}>
        <input
          type="text"
          placeholder="Enter an idea/task to save"
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
        <IdeaList
          ideas={savedIdeas}
          onEditIdea={handleEditIdea}
          onDeleteIdea={handleDeleteIdea}
        />
      )}
    </div>
  );
};

export default SubmitIdea;
