import Container from "@/components/container";
import { Project, Upload } from "@/lib/api/types";
import { getFullPath } from "@/lib/utils";
import { T } from "@/types/i18n";
import Image from "next/image";
import React from "react";

type Props = { t: T; project: Project; images: Upload[] };

function CaseStudyArticle({ t, project, images }: Props) {
  return (
    <article className="divide-y divide-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:items-end">
          <h2 className="text-5xl font-extrabold uppercase lg:col-span-6">{project.title}</h2>
          <p className="lg:col-span-3">{project.slogan}</p>
          <p className="text-muted-foreground lg:col-span-3">{project.brand_identity}</p>
        </div>
      </Container>

      <Container>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.description || "" }} />
      </Container>

      {project.item_attributes && (
        <Container>
          <ul className="grid lg:grid-cols-3 gap-4">
            {Object.entries(project.item_attributes).map(([title, body]) => (
              <li key={title} className="space-y-2">
                <h3 className="text-lg font-bold">{`{${title}}`}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      )}

      {images.length > 0 && (
        <Container>
          <div className="flex flex-col gap-4">
            {images.map((image) => (
              <Image
                src={getFullPath(image.path)}
                alt={image.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full aspect-[3/1] object-cover"
              />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}

export default CaseStudyArticle;
