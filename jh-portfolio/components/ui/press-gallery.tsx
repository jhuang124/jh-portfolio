"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface PressItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  date: string;
}

interface PressGalleryProps {
  items: PressItem[];
}

const PressGallery = ({ items }: PressGalleryProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div>
      {/* Header with nav arrows */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: "0.5px",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            In the Press
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "transparent",
              cursor: canScrollPrev ? "pointer" : "default",
              opacity: canScrollPrev ? 1 : 0.3,
              transition: "opacity 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (canScrollPrev) e.currentTarget.style.borderColor = "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <ArrowLeft style={{ width: "16px", height: "16px", color: "var(--text)" }} />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "transparent",
              cursor: canScrollNext ? "pointer" : "default",
              opacity: canScrollNext ? 1 : 0.3,
              transition: "opacity 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (canScrollNext) e.currentTarget.style.borderColor = "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <ArrowRight style={{ width: "16px", height: "16px", color: "var(--text)" }} />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          breakpoints: {
            "(max-width: 768px)": {
              dragFree: true,
            },
          },
        }}
      >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-4 basis-full md:basis-[380px]">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    aspectRatio: "3 / 2",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "2px solid var(--border)",
                    marginBottom: "16px",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <div
                    className="group-hover:scale-105"
                    style={{
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "var(--bg-warm)",
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--text-dim)",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        Image coming soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Date */}
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "0.4px",
                    color: "var(--text-dim)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.date} &middot; The Atlantic
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "var(--text)",
                    lineHeight: 1.35,
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--text-mid)",
                    marginBottom: "12px",
                    flexGrow: 1,
                  }}
                >
                  {item.summary}
                </p>

                {/* Read link */}
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.3px",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "gap 0.2s",
                  }}
                >
                  Read article
                  <ArrowUpRight
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{
                      width: "14px",
                      height: "14px",
                      transition: "transform 0.2s",
                    }}
                  />
                </span>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { PressGallery };
