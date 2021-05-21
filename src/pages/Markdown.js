// @ts-nocheck
import React, { useState } from 'react';
import '../styles/Styles.css';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const Markdown = () => {
  const [text, setText] = useState('');

  return (
    <div className='text-center px-4 markdownContainer'>
      <h1 className='p-4'>Markdown Previewer</h1>
      <textarea
        name='text'
        id='text'
        rows='10'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='textarea'
      ></textarea>
      <h3 className='mt-3'>Output</h3>
      <Preview markdown={text} />
    </div>
  );
};

function Preview({ markdown }) {
  return (
    <div
      className='preview'
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
    ></div>
  );
}

export default Markdown;
