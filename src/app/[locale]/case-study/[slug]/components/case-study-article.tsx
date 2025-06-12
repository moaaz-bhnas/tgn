"use client";

import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { Project, Upload } from "@/lib/api/types";
import { getFullPath } from "@/lib/utils";
import { T } from "@/types/i18n";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = { t: T; project: Project; images: Upload[] };

function CaseStudyArticle({ t, project, images }: Props) {
  const [ratios, setRatios] = useState<Record<string, number>>({});
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, path: string) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    const ratio = naturalWidth / naturalHeight;
    setRatios((prev) => ({ ...prev, [path]: ratio }));
  };

  // Group images into arrays based on screen size
  const groupedImages = images.reduce<Upload[][]>((acc, image, index) => {
    if (isLargeScreen) {
      // Desktop layout: 3 images in first row, 2 in subsequent rows
      if (index === 0) {
        acc.push([image]);
      } else if (index < 3) {
        acc[0].push(image);
      } else {
        const pairIndex = Math.floor((index - 3) / 2);
        if ((index - 3) % 2 === 0) {
          acc.push([image]);
        } else {
          acc[pairIndex + 1].push(image);
        }
      }
    } else {
      // Mobile layout: 2 images per row
      const pairIndex = Math.floor(index / 2);
      if (index % 2 === 0) {
        acc.push([image]);
      } else {
        acc[pairIndex].push(image);
      }
    }
    return acc;
  }, []);

  return (
    <article>
      <Container className="!max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:items-end">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-3">
              <h2 className="text-5xl font-extrabold">{project.title}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors self-start"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <p className="lg:col-span-3">{project.slogan}</p>
          <p className="text-muted-foreground lg:col-span-3">{project.brand_identity}</p>
        </div>
      </Container>

      <Container className="!max-w-7xl !py-0">
        <Separator className="bg-black" />
      </Container>

      <Container className="!max-w-7xl">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.description || "" }} />
      </Container>

      <Container className="!max-w-7xl !py-0">
        <Separator className="bg-black" />
      </Container>

      {project.item_attributes && project.item_attributes.length > 0 && (
        <Container>
          <ul className="grid lg:grid-cols-3 gap-4">
            {project.item_attributes.map(({ key, value }) => (
              <li key={key} className="space-y-2">
                <h3 className="text-lg font-bold">{`{${key}}`}</h3>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </Container>
      )}

      {images.length > 0 && (
        <Container className="!max-w-7xl">
          <div className="flex flex-col gap-4">
            {groupedImages.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-4">
                {row.map((image) => (
                  <Image
                    key={image.path}
                    src={getFullPath(image.path)}
                    alt={image.title}
                    className="h-auto"
                    style={{
                      flex: ratios[image.path] || 1,
                    }}
                    width={0}
                    height={0}
                    sizes="100vw"
                    onLoad={(e) => handleImageLoad(e, image.path)}
                  />
                ))}
              </div>
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}

export default CaseStudyArticle;
