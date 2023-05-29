import React from 'react';

const IdeaList = ({ ideas, onEditIdea, onDeleteIdea }) => {
  const handleEdit = (index, e) => {
    const updatedIdea = prompt('Enter the updated idea:', ideas[index]);
    if (updatedIdea) {
      onEditIdea(index, updatedIdea);
    }
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this idea?')) {
      onDeleteIdea(index);
    }
  };

  return (
    <div className="idea-list">
      <h3>Previously Saved Ideas</h3>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index} className="idea-item">
            <div className="idea-number">{index + 1}.</div>
            <div className="idea-content">{idea}</div>
            <div className="idea-actions">
              <button className="nav-button edit-button" onClick={(e) => handleEdit(index, e)}>Edit</button>
              <button className="nav-button delete-button" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;
