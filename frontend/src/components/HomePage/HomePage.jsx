import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Choose from "./Choose.jsx";
import cat1 from "../../assets/categories/cat1.jpg";
import cat2 from "../../assets/categories/cat2.jpg";
import cat3 from "../../assets/categories/cat3.jpg";
import cat6 from "../../assets/categories/cat6.jpg";
import cat4 from "../../assets/categories/cat4.jpg";

export default function HomePage() {
  const categories = [
    {
      id: "education",
      tag: "Education",
      title: "Inspire & Learn",
      description: "Expand your mind and build new skills with peer-to-peer study sessions, shared educational resources, and interactive courses focused on academic and professional growth.",
      image: cat6,
    },
    {
      id: "entertainment",
      tag: "Entertainment",
      title: "Know what's new",
      description: "Discuss your favorite blockbusters, review new musical releases, debate pop-culture theories, and share media lists with like-minded friends in active circles.",
      image: cat4,
    },
    {
      id: "technology",
      tag: "Technology",
      title: "Build the Future",
      description: "From web development to machine learning, collaborate with developers and innovators globally to share codebase tricks, work on open source projects, and discuss tech trends.",
      image: cat3,
    },
    {
      id: "sports",
      tag: "Sports & Fitness",
      title: "Fuel Your Passion",
      description: "Talk match results, share athletic achievements, trade training guides, and connect with local running or gym partners to stay motivated.",
      image: cat2,
    },
    {
      id: "gaming",
      tag: "Gaming",
      title: "Play & Compete",
      description: "Find party members, coordinate custom matches, talk about competitive esports news, and showcase your highlights in highly engaged gaming communities.",
      image: cat1,
    }
  ];

  return (
    <div>
      <Hero />
      <LeftSection category={categories[0]} isAlt={false} />
      <RightSection category={categories[1]} isAlt={true} />
      <LeftSection category={categories[2]} isAlt={false} />
      <RightSection category={categories[3]} isAlt={true} />
      <LeftSection category={categories[4]} isAlt={false} />
      <Choose />
    </div>
  );
}
