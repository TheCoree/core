interface FeauterCardContainerProps {
    children: React.ReactNode;
}

const FeauterCardContaner: React.FC<FeauterCardContanerProps> = ({children}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-8">
            {children}
        </div>
    )
}

export default FeauterCardContaner;