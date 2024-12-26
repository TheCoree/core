// components/SimpleButton.tsx

import React from 'react';

interface SimpleButtonProps {
    onClick?: () => void; // Обработчик клика
    children: React.ReactNode; // Используем children для текста
    className?: string; // Добавляем класс для стилизации
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ children, onClick, className }) => (
    <button
        onClick={onClick}
        className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${className}`}
    >
        {children} {/* Отображаем дочерние элементы */}
    </button>
);

export default SimpleButton;
