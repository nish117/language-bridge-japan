
import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

const videos: Video[] = [
  {
    id: "eBSCu2L-0fc",
    title: "Basic Japanese Conversation Practice",
    thumbnail: "https://img.youtube.com/vi/eBSCu2L-0fc/maxresdefault.jpg"
  },
  {
    id: "KJMcQYVcsmI",
    title: "JLPT N5 Practice Test",
    thumbnail: "https://img.youtube.com/vi/KJMcQYVcsmI/maxresdefault.jpg"
  },
  {
    id: "yuu2K2YCwUY",
    title: "Japanese Culture & Traditions",
    thumbnail: "https://img.youtube.com/vi/yuu2K2YCwUY/maxresdefault.jpg"
  }
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { t } = useLanguage();

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="videos" className="py-24 bg-japanese-light">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block rounded-lg bg-japanese-accent/10 px-3 py-1 text-sm font-medium text-japanese-accent mb-2">
            {t("videos.tag")}
          </div>
          <h2 className="section-title text-center mx-auto after:mx-auto">
            {t("videos.title")}
          </h2>
          <p className="text-gray-600 mt-4">
            {t("videos.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
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
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2 line-clamp-2">{video.title}</h3>
                <button 
                  onClick={() => openVideo(video.id)}
                  className="text-japanese-accent hover:text-japanese-indigo font-medium flex items-center gap-1 transition-colors"
                >
                  {t("videos.watchNow")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/videos" className="btn-primary">
            {t("videos.viewMore")} <ArrowRight size={18} />
          </Link>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={closeVideo}>
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
    </section>
  );
};

export default VideoSection;
