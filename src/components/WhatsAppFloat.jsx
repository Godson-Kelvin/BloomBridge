import { whatsAppLinkProps } from "../lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      {...whatsAppLinkProps(
        "Hello BloomBridge 👋 I'd like to speak to someone about surrogacy in Ghana.",
      )}
      aria-label="Chat with BloomBridge on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#04331a] shadow-lg shadow-emerald-500/30 transition duration-200 hover:scale-105 hover:bg-[#1fbe5c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
