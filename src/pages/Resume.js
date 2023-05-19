import React, { useState, useEffect } from 'react';

function HighlightedText() {
  const [highlightedText, setHighlightedText] = useState('');

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    setHighlightedText(selectedText);
    // Perform any additional actions based on the highlighted text
    console.log('Highlighted Text:', selectedText);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection().toString();
      if (!selectedText) {
        setHighlightedText('');
      }
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div onMouseUp={handleTextSelection}>
      Select and highlight some text within this component.
      <br />
      Highlighted Text: {highlightedText}
    </div>
  );
}

export default HighlightedText;
