import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
      <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} style={{ color: '#1DA1F2', cursor: 'pointer' }} />
      </a>
      <a href="https://facebook.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={20} style={{ color: '#3b5998', cursor: 'pointer' }} />
      </a>
      <a href="https://www.instagram.com/100luffy002/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} style={{ color: '#E4405F', cursor: 'pointer' }} />
      </a>
      <a href="https://github.com/Kmkishore05" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} style={{ color: '#333', cursor: 'pointer' }} />
      </a>
    </div>
  );
}
