import {useState} from 'react'
// import './App.css'
import './Chat.css'


// const toggleDropdown = () => {
//     if(document.body.onclick){
//       setDropdownVisible(dropdownVisible);
//     }
//     setDropdownVisible(!dropdownVisible);
//   };


 

  const handleOptionClick = (option) => {
    alert(`You clicked on ${option}`);
  };


function CardComponent({onSendMessage}){
console.log(onSendMessage);
    // const [dropdownVisible, setDropdownVisible] = useState(false);

    const [messages, setMessages] = useState('');

    const handleCardClick = (text) => {
        setMessages(text);
      };

  const handleSendMessage = (message) => {
    onSendMessage(message);
    setMessages(''); // Clear the input field
  };
    return(
      <div className="cards">
      <div className="card" onClick={() => handleSendMessage('What is IUPAC name of C6H5O12')}>
        <span>🧬</span>
        <p>What is IUPAC name of C6H5O12</p>
      </div>
      <div className="card" onClick={() => handleSendMessage('What are different types of drugs utilized in daily life?')}>
        <span>💊</span>
        <p>What are different types of drugs utilized in daily life?</p>
      </div>
      <div className="card" onClick={() => handleSendMessage('Explain about the powerhouse of the cell')}>
        <span>🔬</span>
        <p>Explain about the powerhouse of the cell</p>
      </div>
      <div className="card" onClick={() => handleSendMessage('Explain about chemical bonding')}>
        <span>⌬</span>
        <p>Explain about chemical bonding</p>
      </div>
    </div>
    
)
}


export default CardComponent;