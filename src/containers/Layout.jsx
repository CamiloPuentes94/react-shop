import React from 'react';

const Layout = ({Children}) => {
  return (
    <div className='Layout'>
      {Children}
    </div>
  );
}

export default Layout