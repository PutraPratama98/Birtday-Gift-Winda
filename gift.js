import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Film, Utensils } from "lucide-react";

const gifts = [
  { id: 1, title: "Ngedate Romantis", icon: <Heart size={40} />, description: "Menghabiskan waktu bersama dengan suasana romantis." },
  { id: 2, title: "Nonton Bioskop", icon: <Film size={40} />, description: "Menonton film favorit di bioskop bersama." },
  { id: 3, title: "Makan Bersama", icon: <Utensils size={40} />, description: "Menikmati hidangan spesial bersama." }
];

export default function HadiahPage() {
  const [selectedGift, setSelectedGift] = useState(null);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Pilih Hadiah untuk Winda</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gifts.map((gift) => (
          <motion.div whileHover={{ scale: 1.1 }} key={gift.id}>
            <Card
              className={`p-6 text-center cursor-pointer transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl ${
                selectedGift === gift.id ? "bg-pink-300" : "bg-white"
              }`}
              onClick={() => setSelectedGift(gift.id)}
            >
              <CardContent className="flex flex-col items-center gap-4">
                <div className="text-pink-600">{gift.icon}</div>
                <h2 className="text-xl font-semibold">{gift.title}</h2>
                <p className="text-gray-600">{gift.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedGift && (
        <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white text-lg py-2 px-4 rounded-full shadow-lg">
          Pilih Hadiah Ini
        </Button>
      )}
    </div>
  );
}
