import "./TitleBar.css";
import canvasLogo from "./assets/GRCLogo.png";
import claudeLogo from "./assets/claudeLogo.png";
import chatGPTLogo from "./assets/chatGPTLogo.png";
import geminiLogo from "./assets/geminiLogo.jpg";

function TitleBar() {
  return (
    <div className="titleBar">
      <div className="control-buttons">
        <button
          id="canvas-button"
          onClick={() => alert("Canvas Link Clicked!")}
        >
          <img src={canvasLogo} alt="Canvas" />
        </button>
        <button
          id="claude-button"
          onClick={() => alert("Claude Link Clicked!")}
        >
          <img src={claudeLogo} alt="Claude" />
        </button>
        <button
          id="chatGPT-button"
          onClick={() => alert("ChatGPT Link Clicked!")}
        >
          <img src={chatGPTLogo} alt="ChatGPT" />
        </button>
        <button
          id="gemini-button"
          onClick={() => alert("Gemini Link Clicked!")}
        >
          <img src={geminiLogo} alt="Gemini" />
        </button>
      </div>
    </div>
  );
}

export default TitleBar;
