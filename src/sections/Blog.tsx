import React from "react";
import Mrfix from "../assets/images/mr fix a4.png";
import MyPoster from "../assets/images/my postaers 2.jpg";
import MyPoster1 from "../assets/images/my postaers.jpg";
import MyPoster2 from "../assets/images/my postaers3.jpg";

const posters = [
  {
    id: 1,
    src: Mrfix,
    alt: "Sales Poster",
  },
  {
    id: 2,
    src: MyPoster,
    alt: "Q&A Poster",
  },
  {
    id: 3,
    src: MyPoster1,
    alt: "Tech Poster",
  },
  {
    id: 4,
    src: MyPoster2,
    alt: "Creative Poster",
  },
];

const Blog: React.FC = () => (
  <section className="bg-gray-900 py-20 px-6 lg:px-12 relative overflow-hidden">
    <h2 className="text-white text-3xl font-bold mb-8">My Posters</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posters.map((poster) => (
        <div
          key={poster.id}
          className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center"
        >
          <img
            src={poster.src}
            alt={poster.alt}
            className="w-full h-auto object-contain max-h-[500px] bg-white"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
