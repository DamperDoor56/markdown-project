import './styles/App.scss';
import React from 'react';

var Prism = document.createElement('script');  
Prism.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js');
document.head.appendChild(Prism);

const marked = require("marked");

marked.setOptions({
  breaks: true,
  highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    }
});
const renderer = new marked.Renderer();
renderer.link = function(href, title, text){
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, textareaChange }) => <textarea value={content} onChange={textareaChange}/>

const Previewer = ({ content }) => <div id='preview'>{content}</div> 

function App() {
 const [content, setContent] = React.useState('Hey This is Mohammed')

 const textareaChange= (event) => {
  setContent(event.target.value)
 }
  return(
   <div className='main'>
    <Editor content={content} textareaChange={textareaChange}/>
    <Previewer content={content} />
   </div>
  )
}
export default App;
