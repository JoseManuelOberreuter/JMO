import { useState, useEffect } from 'react';

export const useTypewriterEffect = (words, typingSpeed, deletingSpeed, pauseDuration) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [pause, setPause] = useState(false);
  
    useEffect(() => {
      let timer;
      const word = words[currentWordIndex];
  
      if (pause) {
        timer = setTimeout(() => {
          setPause(false);
        }, pauseDuration);
      } else if (isDeleting) {
        timer = setTimeout(() => {
          setText(prevText => prevText.slice(0, -1));
          if (text === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setPause(true);
          }
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setText(prevText => word.slice(0, prevText.length + 1));
          if (text === word) {
            setIsDeleting(true);
            setPause(true);
          }
        }, typingSpeed);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, pause, currentWordIndex]);
  
    return { text, currentWordIndex };
  };