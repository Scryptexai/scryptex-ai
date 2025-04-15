
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonial = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-6">
              <AvatarFallback>ZA</AvatarFallback>
            </Avatar>
            <blockquote className="text-xl md:text-2xl font-medium mb-4">
              "Sebelum Scryptex, gue buang waktu ikut airdrop scam. Sekarang? Hanya proyek yang proven aja."
            </blockquote>
            <footer className="text-gray-600">
              <cite className="not-italic font-semibold">@Zamady34</cite>
              <div className="text-sm">Early Farmer</div>
            </footer>
          </div>
        </Card>
      </div>
    </section>
  );
};
