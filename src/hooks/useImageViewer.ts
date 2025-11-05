import { useCallback, useEffect, useRef, useState } from "react";

export function useImageViewer() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const prevOverflowRef = useRef<string>("");

  const closeImageViewer = useCallback(() => {
    setIsOpen(false);
    setImageSrc(null);
  }, []);

  const openImageViewer = useCallback((src: string) => {
    setImageSrc(src);
    setIsOpen(true);
  }, []);

  // ESC to close while open
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeImageViewer();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeImageViewer]);

  // Body scroll lock while open
  useEffect(() => {
    if (!isOpen) return;
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflowRef.current;
    };
  }, [isOpen]);

  return {
    isOpen,
    imageSrc,
    openImageViewer,
    closeImageViewer,
  } as const;
}

