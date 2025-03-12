import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const quotes = [
  "Cinta sejati adalah tentang memahami dan menghargai, bukan mengubah.",
  "Aku akan selalu ada di sisimu, tidak peduli seberapa sulit perjalanan ini.",
  "Setiap hari bersamamu adalah hadiah yang tak ternilai.",
  "Jangan pernah ragu, kamu adalah cahaya dalam hidupku, dan aku akan selalu mendukungmu.",
  "Kamu lebih kuat dari yang kamu kira, dan aku akan selalu ada untuk mengingatkanmu.",
  "Percayalah, semua yang kita jalani akan membawa kita ke tempat yang lebih indah.",
  "Kamu tidak pernah sendiri, aku selalu bersamamu dalam doa dan hati.",
  "Cinta kita bukan tentang kesempurnaan, tapi bagaimana kita tetap bertahan bersama.",
  "Aku bangga padamu, dengan semua yang kamu lakukan dan semua yang akan kamu capai.",
  "Hari ini mungkin sulit, tapi besok akan lebih baik. Aku percaya padamu."
];

export default function QuotesPage() {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrevQuote = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl text-center"
      >
        <Card className="p-6 bg-white shadow-lg rounded-2xl border border-pink-300">
          <CardContent className="text-xl text-gray-700 font-semibold">
            "{quotes[index]}"
          </CardContent>
        </Card>
      </motion.div>
      <div className="mt-6 flex space-x-4">
        <Button
          onClick={handlePrevQuote}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2 text-white" /> Sebelumnya
        </Button>
        <Button
          onClick={handleNextQuote}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 flex items-center"
        >
          <Heart className="w-5 h-5 mr-2 text-white" /> Selanjutnya
        </Button>
      </div>
    </div>
  );
}