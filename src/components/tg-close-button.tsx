import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function TgCloseButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(function toggleOenState() {
    setIsOpen(true);

    return function clean() {
      setIsOpen(false);
    };
  }, []);

  return (
    <Button
      variant={"ghost"}
      className="relative w-12 h-12 flex items-center justify-center hover:bg-transparent"
      aria-label="Close menu"
    >
      <div
        className={cn(
          "absolute w-8 h-1 bg-white transition-transform duration-300 ease-in-out origin-[30%_50%] delay-500",
          isOpen ? "rotate-45 translate-x-[-2px] translate-y-0" : "rotate-0 -translate-y-1"
        )}
      />
      <div
        className={cn(
          "absolute w-8 h-1 bg-white transition-transform duration-300 ease-in-out origin-[30%_50%] delay-500",
          isOpen ? "-rotate-45 translate-x-[-2px] translate-y-0" : "rotate-0 translate-y-1"
        )}
      />
    </Button>
  );
}
