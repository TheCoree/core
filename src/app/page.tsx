// app/page.tsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import FeatureCardContainer from "../components/FeatureCardContainer";

function App() {
    return (
        <div>
            <Hero />
            <FeatureCardContainer>
                <FeatureCard cardTitle='User-Friendly Interface' value='Our app offers an intuitive interface for easy navigation.' />
                <FeatureCard cardTitle='Instant Notifications' value='Receive real-time notifications about important events and updates.' />
                <FeatureCard cardTitle='Data Security' value='We ensure the protection of your data with modern encryption technologies.' />
                <FeatureCard cardTitle='Cross-Platform Support' value='Use our app on any device — from mobile to desktop.' />
                <FeatureCard cardTitle='Personalized Recommendations' value='Get recommendations based on your preferences and behavior.' />
                <FeatureCard cardTitle='24/7 Support' value='Our support team is always ready to assist you at any time of the day.' />
                <FeatureCard cardTitle='Regular Updates' value='We continuously update the app, adding new features and improvements.' />
                <FeatureCard cardTitle='User Community' value='Join our community and share experiences with other users.' />
            </FeatureCardContainer>
        </div>
    );
}

export default App;
