import './styles/App.scss';
import React, {useState} from 'react';
import { marked } from 'marked';

function App() {
 const [markdown, setMarkdown] = useState('');
 
  return(
   <div className='main'>
   <textarea  value={markdown} onChange={e => setMarkdown(e.target.value)}></textarea>
   <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} className="output"></div>
   </div>
  )
}
export default App;
