
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import  {useToast}  from "@/components/hooks/use-toast";
import { Clipboard, X } from "lucide-react";
import { useState } from "react";
import { FaFacebook,FaTwitter,FaWhatsapp } from "react-icons/fa";


export default function ShareDialog() {
  const { toast } = useToast();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [isCopied, setIsCopied] = useState(false);

  // Copy link function
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    toast({
      title: "Link Copied!",
      description: "You can now share it anywhere.",
    });

    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Clipboard className="w-5 h-5 mr-2" /> Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this product</DialogTitle>
        </DialogHeader>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4">
          {/* WhatsApp Share */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank")}
          >
            <FaWhatsapp className="w-5 h-5 text-green-500" /> WhatsApp
          </Button>

          {/* Facebook Share */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")}
          >
            <FaFacebook className="w-5 h-5 text-blue-600" /> Facebook
          </Button>

          {/* Twitter (X) Share */}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, "_blank")}
          >
            <FaTwitter className="w-5 h-5 text-blue-500" /> Twitter
          </Button>
        </div>

        {/* Copy Link Section */}
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mt-4">
          <span className="text-gray-700 text-sm truncate">{url}</span>
          <Button size="sm" onClick={handleCopy}>
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </div>

        {/* Close Button */}
        <Button variant="ghost" className="w-full mt-2">
          <X className="w-5 h-5 mr-2" /> Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
