import React, {useEffect} from 'react';

export default function Root({children}: {children: React.ReactNode}) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('data-theme-choide', 'dark');
  }, []);

  localStorage.setItem('theme', 'dark');
  return <>{children}</>;
}