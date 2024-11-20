import React from "react";
import AnimatedHoverCard from "../components/AnimatedHoverCard";

const AboutScreen: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

                {/* Owner Section */}
                <div className="mb-16 flex flex-col md:flex-row items-center">
                    <img
                        src="https://images.unsplash.com/photo-1600334129128-92c06a6601e1?auto=format&fit=crop&q=80"
                        alt="Owner"
                        className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-8"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
                        <p className="text-gray-700 text-lg">
                            John Doe, the visionary behind AutoElite, has always had a passion for luxury cars and
                            exceptional customer service. With over 15 years in the automotive industry, John
                            established AutoElite to provide a seamless and transparent car-buying experience. His
                            dedication to quality and innovation has driven AutoElite to become a trusted name in the
                            industry.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[ 
                            {
                                title: "Integrity",
                                description:
                                    "We prioritize honesty and transparency in all our interactions, ensuring a trustworthy car-buying experience.",
                                image: "https://images.unsplash.com/photo-1564866657312-35aee30c7f9c?auto=format&fit=crop&q=80",
                            },
                            {
                                title: "Quality",
                                description:
                                    "Every vehicle in our inventory undergoes rigorous inspections to guarantee superior quality and performance.",
                                image: "https://images.unsplash.com/photo-1585829364346-60a7976e928e?auto=format&fit=crop&q=80",
                            },
                            {
                                title: "Customer-Centric",
                                description:
                                    "We are dedicated to providing exceptional customer service, making your satisfaction our top priority.",
                                image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80",
                            },
                        ].map((value, index) => (
                            <AnimatedHoverCard
                                key={index}
                                title={value.title}
                                description={value.description}
                                image={value.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen;
