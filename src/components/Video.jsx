import React from "react";
import './video.css'
                                                                            
const videos = [
  { name: "ALAQA",    desc:"Session Epi-3", videoSrc: "video.mp4", adLink: " https://poawooptugroo.com/4/7245179", downloadLink: "video.mp4" },
  { name: "GARWASHI", desc:"Session Epi-3", videoSrc: "video.mp4", adLink: "https://adlink2.com", downloadLink: "https://download2.com" },
  { name: "JAMILUN JIDDA", desc:"Session Epi-3", videoSrc: "video.mp4", adLink: "https://adlink2.com", downloadLink: "https://download2.com" },
  { name: "ZAMAN AURE", desc:"Session Epi-3", videoSrc: "video.mp4", adLink: "https://adlink2.com", downloadLink: "https://download2.com" },
  { name: "YAN ZAMANI", desc:"Session Epi-3", videoSrc: "video.mp4", adLink: "https://adlink2.com", downloadLink: "https://download2.com" },
  { name: "NAMAMAJO", desc:"Session Epi-3", videoSrc: "video.mp4", adLink: "https://adlink2.com", downloadLink: "https://download2.com" },
];

const VideoList = () => {
  const handleDownload = (adLink, videoSrc) => {
    window.open(adLink, "_blank");
    const a = document.createElement("a");
    a.href = videoSrc;
    a.download = videoSrc.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="videos">
      {videos.map((video, index) => (
        <div key={index} className="avideo">
          <video controls loop muted autoPlay className="">
            <source src={video.videoSrc} type="video/mp4" />
          </video>
          <div className="videoData">
            <div className="">
                <h3>{video.name}</h3>
                <h4>{video.desc}</h4>
            </div>
          <button 
          onClick={() => handleDownload(video.adLink, video.videoSrc)}
            // onClick={() => handleDownload(video.adLink, video.downloadLink)}
            className="">
            Download Now
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
