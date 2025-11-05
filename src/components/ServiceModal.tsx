import { useEffect, useRef } from "react";
import type { ServiceItem } from "@/lib/servicesData";

type ServiceModalProps = {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
};

// Minimal focus trap util: keeps tab focus inside the modal while open
function useFocusTrap(
  active: boolean,
  containerRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const getFocusable = () =>
      Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        e.preventDefault();
        (document.activeElement as HTMLElement)?.blur?.();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (!current || current === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (!current || current === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    const focusFirst = () => {
      const focusables = getFocusable();
      (focusables[0] ?? container).focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    // focus after open
    const id = window.setTimeout(focusFirst, 0);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, containerRef]);
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: ServiceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  useFocusTrap(isOpen, dialogRef);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!isOpen || !service) return null;

  const titleId = `service-modal-title-${service.slug}`;
  const descId = `service-modal-desc-${service.slug}`;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-hidden={false}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative mx-4 w-full max-w-[90vw] outline-none focus:outline-none"
      >
        {/* Card */}
        <div className="flex flex-col rounded-2xl bg-card/80 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden max-h-[90vh]">
          {/* Content (scrollable) */}
          <div className="p-6 md:p-8 flex-1 overflow-y-auto">
            <h3
              id={titleId}
              className="text-2xl md:text-5xl font-bold text-foreground mb-4"
            >
              {service.title}
            </h3>
            <p id={descId} className="text-l text-muted-foreground max-w-2xl">
              {service.excerpt}
            </p>
            <br></br>
            <ul className="text-l text-muted-foreground max-w-2xl space-y-1">
              {service.why.map((w, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-orange-400 flex-shrink-0" />
                  <span className="text-foreground/90">{w}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-lg border border-border text-foreground bg-foreground/5 hover:bg-foreground/1 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Schliessen
              </button>
            </div>
          </div>

          {/* Footer image (bottom) */}
          {/*
          
          <div className="relative h-56 md:h-72 w-full bg-gradient-to-tr from-violet-300/40 via-orange-200/40 to-transparent flex-shrink-0">
            <img
              src={service.imageSrc}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-transparent" />
          </div>
          */}
        </div>

        {/* Close button */}
        <button
          aria-label="Modal schließen"
          onClick={onClose}
          className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-background/80 backdrop-blur border border-white/30 shadow-medium hover:scale-105 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="sr-only">Schließen</span>
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 m-auto text-foreground/80"
          >
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
