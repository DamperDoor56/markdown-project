import './styles/App.scss';
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ReactDOM from 'react-dom'
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'



function App() {
  const [input, setInput] = useState();
  return(
    <div className='App'>
      <textarea autoFocus className='textarea' value={input} onChange={(e) => setInput(e.target.value)} />

      <ReactMarkdown 
      children={input}
      className='markdown' 
      style={atomOneDark}
      renderers ={{
        code: Component,
      }}/>
    </div>
  )
}

const Component = ({value, language}) =>{
  return(
    <SyntaxHighlighter language={language ?? null} style={atomOneDark}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

export default App;
