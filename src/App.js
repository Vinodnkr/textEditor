import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {useState} from 'react'
import './App.css'

const App = () => {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  const toggleBold = () => {
    setIsBold(prevState => !prevState)
  }

  const toggleItalic = () => {
    setIsItalic(prevState => !prevState)
  }

  const toggleUnderline = () => {
    setIsUnderline(prevState => !prevState)
  }

  return (
    <div className="bg">
      <div className="bg1">
        <h1>Text Editor</h1>
        <img
          className="im"
          alt="text editor"
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        />
      </div>
      <div className="bg2">
        <ul className="bg21">
          <li>
            <button
              className={`btn ${isBold ? 'active' : ''}`}
              type="button"
              onClick={toggleBold}
              data-testid="bold"
              style={{color: isBold ? '#faff00' : '#f1f5f9'}} // Swap the colors for active and inactive states
            >
              <VscBold size={25} />
            </button>
          </li>
          <li>
            <button
              className={`btn ${isItalic ? 'active' : ''}`}
              type="button"
              onClick={toggleItalic}
              data-testid="italic"
              style={{color: isItalic ? '#faff00' : '#f1f5f9'}}
            >
              <GoItalic size={25} />
            </button>
          </li>
          <li>
            <button
              className={`btn ${isUnderline ? 'active' : ''}`}
              type="button"
              onClick={toggleUnderline}
              data-testid="underline"
              style={{color: isUnderline ? '#faff00' : '#f1f5f9'}}
            >
              <AiOutlineUnderline size={25} />
            </button>
          </li>
        </ul>
        <textarea
          className={`area ${isBold ? 'bold' : ''} ${
            isItalic ? 'italic' : ''
          } ${isUnderline ? 'underline' : ''}`}
          style={{
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'underline' : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default App
