// src/components/SocialLinks3D.tsx

import React from 'react';

const SocialLinks3D: React.FC = () => {
  const socials = [
  { 
    name: 'YouTube', 
    icon: 'youtube', 
    href: 'https://www.youtube.com/@CloudMaSa_Technologies/videos'
  },
  { 
    name: 'Instagram', 
    icon: 'instagram', 
    href: 'https://www.instagram.com/cloudmasa_technology/'
  },
  { 
    name: 'Facebook', 
    icon: 'facebook', 
    href: 'https://www.facebook.com/people/CloudMasa-T/pfbid02ZtwTkAL9eUgojZqufH5P3yozccK1bVNmrGowNiWxD6x2Yf3QWdn4nSZB9Nhuattbl/'
  },
  { 
    name: 'X', 
    icon: 'X', 
    href: 'https://x.com/cloudmasa'
  },
  { 
    name: 'LinkedIn', 
    icon: 'linkedin', 
    href: 'https://www.linkedin.com/in/cloudmasa-technologies/'
  },
  { 
    name: 'GitHub', 
    icon: 'github', 
    href: 'https://github.com/CloudMasa-Tech'
  },    
];

return (
  <div className="social-links-3d-wrapper">
    <ul>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.href}>
            <img 
              src={`/icons/${social.icon}.png`} 
              alt={social.name} 
              className="w-2 h-2 sm:w-3 sm:h-3 object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

};

export default SocialLinks3D;