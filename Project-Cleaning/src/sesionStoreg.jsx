import { useEffect } from 'react';

const ScrollRestoration = () => {
  useEffect(() => {
    // Восстанавливаем позицию прокрутки при загрузке страницы
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    // Сохраняем текущую позицию прокрутки перед закрытием страницы или обновлением
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // Этот компонент не рендерит ничего на экране
};

export default ScrollRestoration;
