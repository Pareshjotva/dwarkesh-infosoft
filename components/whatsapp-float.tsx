import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a className="floating-whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Dwarkesh Infosoft on WhatsApp">
      <MessageCircle size={25} fill="currentColor" />
    </a>
  );
}
