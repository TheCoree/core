// components/ClassicButtonLink.tsx

import Link from 'next/link';

interface ClassicButtonLinkProps {
    link: string;
    children: React.ReactNode; // Используем children для текста
    onClick?: () => void; // Добавляем обработчик клика
    className?: string; // Добавляем класс для стилизации
}

const ClassicButtonLink: React.FC<ClassicButtonLinkProps> = ({ children, link, onClick, className }) => (
    <Link href={link} onClick={onClick} className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 ${className}`}>
        {children} {/* Отображаем дочерние элементы */}
    </Link>
);

export default ClassicButtonLink;
