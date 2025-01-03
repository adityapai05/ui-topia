// Dependencies: npm install lucide-react

import { Button } from "@/components/ui/button";
import AvatarImg from "@/assets/favicon.png";
import { ChevronDown } from "lucide-react";

export default function ButtonDemo() {
  return (
    <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
      <img
        className="rounded-full"
        src={AvatarImg}
        alt="Profile image"
        width={40}
        height={40}
        aria-hidden="true"
      />
      <ChevronDown size={16} strokeWidth={2} className="ms-2 opacity-60" aria-hidden="true" />
    </Button>
  );
}
