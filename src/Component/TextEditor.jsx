import React, { useState, useRef } from 'react';
import "./texteditor.css"

function TextEditor() {
  const [text, setText] = useState('');
  const editableRef = useRef(null);

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
        <h2>Bold and Italic Text Editor</h2>
        <div className='editor'>
      <input type="text" value={text} onChange={handleInputChange} placeholder="enter your text here"/>
      <div className='ref'
        ref={editableRef}
        contentEditable={true}
      >
        {text}
      </div>
      <button onClick={handleBoldClick}><strong>B</strong></button>
      <button onClick={handleItalicClick}><i>I</i></button>
      </div>
    </div>
  );
}

export default TextEditor;



