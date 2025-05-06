import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Category } from "@/lib/api/types";
import AccordionArticle from "@/components/accordion-article";
import { T } from "@/types/i18n";

type Props = {
  t: T;
  categories: Category[];
};

function ServicesAccordion({ t, categories }: Props) {
  return (
    <Accordion className="divide-y divide-gray-800" type="single" collapsible>
      {categories.map((category) => (
        <AccordionItem key={category.id} value={category.name}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{category.name}</AccordionTrigger>
          <AccordionContent>
            {category.services.map((service) => (
              <AccordionArticle
                key={service.id}
                article={{
                  title: service.title,
                  content: service.description,
                }}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ServicesAccordion;
