import React from 'react';

const SocialIcon = ({ icon: IconComponent }: any) => {
  if (!IconComponent) {
    return null;
  }
  return <IconComponent />;
};

export default SocialIcon;
