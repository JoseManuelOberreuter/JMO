import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';


// Función para hacer scroll hasta arriba
export function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}