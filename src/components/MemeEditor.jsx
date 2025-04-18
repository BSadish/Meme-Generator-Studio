import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

function MemeEditor({ template, onBack }) {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [stickers, setStickers] = useState([]);
  const memeRef = useRef(null);

  const availableStickers = ['😂', '🔥', '💀', '👀', '✨', '👍', '❤️'];

  const addSticker = (sticker) => {
    setStickers([...stickers, {
      id: Date.now(),
      content: sticker,
      position: { x: 100, y: 100 }
    }]);
  };

  const updateStickerPosition = (id, newPosition) => {
    setStickers(stickers.map(sticker => 
      sticker.id === id ? { ...sticker, position: newPosition } : sticker
    ));
  };

  const downloadMeme = () => {
    // In a real app, you would use html2canvas or similar to capture the meme
    alert('Download functionality would be implemented here');
  };

  return (
    <div className="meme-editor">
      <button onClick={onBack} className="back-button">← Back to Templates</button>
      
      <div className="editor-container">
        <div className="meme-display" ref={memeRef}>
          <img src={template.url} alt={template.name} className="meme-image" />
          
          <div className="meme-text top-text">{topText}</div>
          <div className="meme-text bottom-text">{bottomText}</div>
          
          {stickers.map(sticker => (
            <Draggable
              key={sticker.id}
              position={sticker.position}
              onStop={(e, data) => updateStickerPosition(sticker.id, { x: data.x, y: data.y })}
            >
              <div className="sticker">{sticker.content}</div>
            </Draggable>
          ))}
        </div>
        
        <div className="editor-controls">
          <div className="text-controls">
            <h3>Text</h3>
            <input
              type="text"
              placeholder="Top text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Bottom text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
          </div>
          
          <div className="sticker-controls">
            <h3>Stickers</h3>
            <div className="sticker-picker">
              {availableStickers.map(sticker => (
                <button 
                  key={sticker} 
                  className="sticker-option"
                  onClick={() => addSticker(sticker)}
                >
                  {sticker}
                </button>
              ))}
            </div>
          </div>
          
          <button onClick={downloadMeme} className="download-button">
            Download Meme
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemeEditor;