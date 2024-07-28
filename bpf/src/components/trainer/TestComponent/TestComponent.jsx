import React, { useState } from 'react';
import { Card, Button, FormControl } from 'react-bootstrap';
import mockTests from './mockData';
import './testComponent.css';

const TestComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="test-container py-4">
      <h2>List of modules</h2>
      <FormControl
        type="text"
        placeholder="Search for a course..."
        className="mb-4"
        onChange={handleSearchChange}
        value={searchTerm}
      />
      {Object.keys(mockTests).map((category) => (
        <div key={category} className="test-category my-3">
          <h3>{category}</h3>
          <div className="test-grid">
            {mockTests[category]
              .filter((test) =>
                test.title.toLowerCase().includes(searchTerm) || test.description.toLowerCase().includes(searchTerm)
              )
              .map((test) => (
                <Card key={test.id} className="my-2 test-card">
                  <Card.Body>
                    <h5 className="test-title">{test.title}</h5>
                    <p className="test-description">{test.description}</p>
                    <Button 
                      variant="primary" 
                      href={test.formLink} 
                      target="_blank" 
                      className="test-button"
                    >
                      video link
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;