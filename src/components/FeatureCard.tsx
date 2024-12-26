import React from "react";

interface FeauterCardProps {
    title: React.ReactNode;
    value: React.ReactNode;
}

export default function FeauterCard({ title, value }: FeauterCardProps) {
    return (
        <h3 className="text-2xl font-bold mb-4">Feature 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    )
}