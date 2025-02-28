import Container from "@/components/container";
import { T } from "@/types/i18n";
import Image from "next/image";
import React from "react";

type Props = { t: T };

function CaseStudyArticle({ t }: Props) {
  const subArticles = [
    { title: t.timeline, body: t.lorem_ipsum },
    { title: t.project_scope, body: t.lorem_ipsum },
    { title: t.problem, body: t.lorem_ipsum },
  ];

  return (
    <article className="divide-y divide-black">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between">
          <h2 className="text-5xl font-extrabold uppercase">{t.title}</h2>
          <p>{t.slogan}</p>
          <p className="text-muted-foreground mt-2 lg:mt-0">{t.identity}</p>
        </div>
      </Container>

      <Container>
        <p>{t.lorem_ipsum}</p>
      </Container>

      <Container>
        <ul className="grid lg:grid-cols-3 gap-4">
          {subArticles.map(({ title, body }) => (
            <li key={title} className="space-y-2">
              <h3 className="text-lg font-bold">{`{${title}}`}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <div className="flex flex-col gap-4">
          <Image
            src="/images/banner.jpg"
            alt="Case Study"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-[3/1]"
          />
          <Image
            src="/images/banner.jpg"
            alt="Case Study"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-[3/1]"
          />
        </div>
      </Container>
    </article>
  );
}

export default CaseStudyArticle;
