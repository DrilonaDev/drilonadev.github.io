import { useEffect, useRef, useState } from "react";

type ImageViewerProps = {
  isOpen: boolean;
  src: string | null;
  onClose: () => void;
  ariaLabel?: string;
};

export default function ImageViewer({
  isOpen,
  src,
  onClose,
  ariaLabel = "Bild-Viewer",
}: ImageViewerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  // Animate on mount
  useEffect(() => {
    if (!isOpen) return setEntered(false);
    const id = window.setTimeout(() => setEntered(true), 0);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  // Focus dialog when opened
  useEffect(() => {
    if (!isOpen) return;
    const id = window.setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(id);
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen || !src) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={[
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/60 backdrop-blur-sm",
        "transition-opacity duration-200",
        entered ? "opacity-100" : "opacity-0",
      ].join(" ")}
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={[
          "relative outline-none focus:outline-none",
          "mx-4 w-full max-w-[90vw] max-h-[90vh]",
          "transition-transform duration-200",
          entered ? "scale-100" : "scale-95",
        ].join(" ")}
      >
        {/* Scrollable container */}
        <div className="bg-background/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-y-auto max-h-[90vh]">
            <img src={src} alt="Detailansicht" className="w-full h-auto" />
          </div>
        </div>

        {/* Close button */}
        <button
          aria-label="Schliessen"
          onClick={onClose}
          className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-background/90 backdrop-blur border border-white/30 shadow-medium hover:scale-105 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 m-auto text-foreground/80">
            <path
              d="M6 6l12 12M18 6l-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

