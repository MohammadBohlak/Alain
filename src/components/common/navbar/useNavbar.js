import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const collapseRef = useRef(null);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapseRef.current &&
        !collapseRef.current.contains(event.target) &&
        !event.target.closest('.navbar-toggler')
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleScrollToSection = (hash) => {
    setExpanded(false);
    
    if (window.location.pathname !== '/') {
      navigate('/', { state: { targetSection: hash } });
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    expanded,
    setExpanded,
    collapseRef,
    handleScrollToSection
  };
};