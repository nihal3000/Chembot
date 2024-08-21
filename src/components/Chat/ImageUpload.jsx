import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('https://ffd8-34-73-225-33.ngrok-free.app/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',

          
          
            'ngrok-skip-browser-warning':"any"
        },
      });
      console.log(response);
      const { caption } = response.data;
      caption.pop()
      const combinedString = caption.join(' ');
      setOutput(combinedString);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error uploading image. Please try again.');
      setOutput('');
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {output && <p style={{ color: 'blue' }}>cOutput: {output}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ImageUpload;
