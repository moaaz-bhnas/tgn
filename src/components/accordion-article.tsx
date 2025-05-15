import { Separator } from "@radix-ui/react-separator";
import { ReactNode } from "react";

function AccordionArticle({
  article,
  callToAction = <></>,
}: {
  article: { title: string; content: string };
  callToAction?: ReactNode;
}) {
  return (
    <article className="space-y-4 py-2 sm:p-4">
      <div className="grid gap-1 sm:grid-cols-4">
        <h3 className="text-xl uppercase">{article.title}</h3>
        <Separator className="hidden sm:block w-24 h-1 bg-gray-800 mt-3" />
        <div className="col-span-2 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {callToAction}
    </article>
  );
}

export default AccordionArticle;
