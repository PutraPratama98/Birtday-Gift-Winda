import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Image, Video } from "lucide-react";

const galleryItems = [
  { type: "image", src: "/images/photo1.jpg", alt: "Foto 1" },
  { type: "image", src: "/images/photo2.jpg", alt: "Foto 2" },
  { type: "video", src: "/videos/video1.mp4", alt: "Video 1" },
  { type: "image", src: "/images/photo3.jpg", alt: "Foto 3" },
  { type: "video", src: "/videos/video2.mp4", alt: "Video 2" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? galleryItems : galleryItems.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-pink-100 p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Galeri Kenangan</h1>
      <div className="flex justify-center gap-4 mb-6">
        <Button variant="outline" onClick={() => setFilter("all")}>
          Semua
        </Button>
        <Button variant="outline" onClick={() => setFilter("image")}>
          <Image className="w-4 h-4 mr-2" /> Foto
        </Button>
        <Button variant="outline" onClick={() => setFilter("video")}>
          <Video className="w-4 h-4 mr-2" /> Video
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <Card>
              <CardContent className="p-2">
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-cover" />
                ) : (
                  <video controls className="w-full h-48">
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
