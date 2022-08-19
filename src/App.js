import './App.scss';
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <div>
        <textarea autoFocus className='textarea' value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <ReactMarkdown
      source={input}
      className='markdown'
      renderers={{
        code:Component,
      }}
      >{input}</ReactMarkdown>

    </div>
  );
}



const Component = ({ value, language }) => {
  return(
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  )
}

export default App;
