'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion';

interface FeatureCardProps {
    cardTitle: string;
    value: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ cardTitle, value }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div className="bg-foreground text-background p-6 rounded-lg shadow-lg items-start"
             ref={ref}
             initial={{ opacity: 0, y: 50 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6 }}
        >
            <h3 className="text-2xl font-bold mb-4 font-orbitron">{cardTitle}</h3>
            <p>{value}</p>
        </motion.div>
    );
};

export default FeatureCard;
