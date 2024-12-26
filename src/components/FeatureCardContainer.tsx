interface FeatureCardContainerProps {
    children: React.ReactNode;
}

const FeatureCardContainer: React.FC<FeatureCardContainerProps> = ({children}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-20">
            {children}
        </div>
    )
}

export default FeatureCardContainer;