
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type VideoCategory = {
  id: string;
  name: string;
};

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
};

const categories: VideoCategory[] = [
  { id: "all", name: "All Videos" },
  { id: "lessons", name: "Language Lessons" },
  { id: "culture", name: "Cultural Insights" },
  { id: "jlpt", name: "JLPT Preparation" },
  { id: "testimonials", name: "Student Testimonials" }
];

const videos: Video[] = [
  {
    id: "eBSCu2L-0fc",
    title: "Basic Japanese Conversation Practice",
    thumbnail: "https://img.youtube.com/vi/eBSCu2L-0fc/maxresdefault.jpg",
    category: "lessons",
    duration: "15:24"
  },
  {
    id: "KJMcQYVcsmI",
    title: "JLPT N5 Practice Test",
    thumbnail: "https://img.youtube.com/vi/KJMcQYVcsmI/maxresdefault.jpg",
    category: "jlpt",
    duration: "28:16"
  },
  {
    id: "yuu2K2YCwUY",
    title: "Japanese Culture & Traditions",
    thumbnail: "https://img.youtube.com/vi/yuu2K2YCwUY/maxresdefault.jpg",
    category: "culture",
    duration: "12:47"
  },
  {
    id: "TyVSGY2iprE",
    title: "Hiragana Writing Practice",
    thumbnail: "https://img.youtube.com/vi/TyVSGY2iprE/maxresdefault.jpg",
    category: "lessons",
    duration: "20:10"
  },
  {
    id: "F7g8BxiecKU",
    title: "My Study Experience in Tokyo",
    thumbnail: "https://img.youtube.com/vi/F7g8BxiecKU/maxresdefault.jpg",
    category: "testimonials",
    duration: "08:35"
  },
  {
    id: "LHFVj77B8Zw",
    title: "JLPT N4 Grammar Points Explained",
    thumbnail: "https://img.youtube.com/vi/LHFVj77B8Zw/maxresdefault.jpg",
    category: "jlpt",
    duration: "32:50"
  },
  {
    id: "IJt1DCoXlwk",
    title: "Top 10 Places to Visit in Japan",
    thumbnail: "https://img.youtube.com/vi/IJt1DCoXlwk/maxresdefault.jpg",
    category: "culture",
    duration: "14:22"
  },
  {
    id: "QQRmWZoMTZA",
    title: "From Beginner to Fluent: My Journey",
    thumbnail: "https://img.youtube.com/vi/QQRmWZoMTZA/maxresdefault.jpg",
    category: "testimonials",
    duration: "11:05"
  }
];

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos = selectedCategory === "all"
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    // Restore body scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-20 bg-japanese-light">
        <div className="section-container py-16">
          <Link to="/" className="inline-flex items-center text-japanese-accent hover:text-japanese-indigo transition-colors mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Video Gallery</h1>
            <p className="text-gray-600 text-lg">
              Browse our collection of Japanese language tutorials, cultural insights, and student testimonials.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? "bg-japanese-accent text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVideos.map((video) => (
              <div 
                key={video.id} 
                className="video-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg"
              >
                <div className="relative group cursor-pointer" onClick={() => openVideo(video.id)}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3 text-japanese-accent">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg line-clamp-2">{video.title}</h3>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-japanese-accent/10 text-japanese-accent text-xs px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === video.category)?.name}
                    </span>
                    <button 
                      onClick={() => openVideo(video.id)}
                      className="text-japanese-accent hover:text-japanese-indigo font-medium flex items-center gap-1 transition-colors"
                    >
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No videos found in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
      
      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" 
          onClick={closeVideo}
        >
          <div className="max-w-4xl w-full aspect-video relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            ></iframe>
            <button 
              onClick={closeVideo} 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
