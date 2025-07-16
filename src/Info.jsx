import {Fragments} from "react";
import photo from "./assets/me.jpg"
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export default function   Info(){
    return (
       <>
              <img src={photo} className="profile" alt="kishore siiting under nature" />
              <div>
                <h1>KISHORE K M</h1>
                <h4>Creative Thinker</h4>
                <a id="link" href="https://kishorekmportfolio.netlify.app/">portfolio.com</a>
                
                <div id="btn-w">
                <button
        onClick={() => window.location.href = "mailto:kmkishorecsebtech@gmail.com"}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          cursor: 'pointer'
        }}
      >
        <MdEmail size={20} />
        Email
      </button>
        <button
        onClick={() => window.open("https://www.linkedin.com/in/kishore-k-m-4b6859266/", "_blank")}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #0A66C2',
          backgroundColor: '#0A66C2',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <FaLinkedin size={20} />
        LinkedIn
      </button>
                </div>
              </div>
       </>

    )
}
