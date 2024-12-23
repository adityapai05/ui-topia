"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CopyButton = ({ componentSource }: { componentSource: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "absolute right-2 top-2 transition-opacity",
        !copied &&
          "lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
      )}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy component source"}
              disabled={copied}
            >
              <div
                className={cn(
                  "transition-all",
                  copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill="#10B981"
                    d="M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z"
                  />
                </svg>
              </div>
              <div
                className={cn(
                  "absolute transition-all",
                  copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                )}
              >
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z" />
                </svg>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="border border-input bg-popover px-2 py-1 text-xs text-muted-foreground">
            Copy
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CopyButton;
