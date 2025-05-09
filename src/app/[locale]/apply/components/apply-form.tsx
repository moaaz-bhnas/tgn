"use client";

import { T } from "@/types/i18n";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Bubble from "@/components/bubble";
import TgCode from "@/components/tg-code";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(2).max(50),
  resume:
    typeof window === "undefined"
      ? z.any().refine((file) => file?.length == 1, "File is required.")
      : z.instanceof(FileList).refine((file) => file?.length == 1, "File is required."),
  portfolio: typeof window === "undefined" ? z.any() : z.instanceof(FileList).optional(),
  website_url: z.string().min(2).max(50).optional(),
  linkedin_url: z.string().min(2).max(50).optional(),
});

function ApplyForm({ t }: { t: T }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // File preview
  const resumeFile = form.watch("resume");
  const portfolioFiles = form.watch("portfolio");

  const portfolioFileName = portfolioFiles?.length > 0 ? portfolioFiles[0].name : null;
  const resumeFileName = resumeFile?.length > 0 ? resumeFile[0].name : null;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fileRef = form.register("resume");
  const portfolioRef = form.register("portfolio");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4 lg:gap-x-12">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.first_name}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.last_name}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.email}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.phone}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="bg-transparent border-2 rounded-none border-black w-full flex items-center flex-col justify-center py-8 gap-4">
                  <TgCode text={t.resume} />

                  {resumeFileName && <span className="text-muted-foreground">{resumeFileName}</span>}
                </FormLabel>
                <FormControl>
                  <Input
                    {...fileRef}
                    className="sr-only w-1"
                    type="file"
                    onChange={(event) => {
                      field.onChange(event.target?.files ?? undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="portfolio"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="bg-transparent border-2 rounded-none border-black w-full flex flex-col justify-center items-center py-8 gap-4">
                  <span className="flex gap-2 items-end">
                    <small className="text-muted-foreground">{t.only_for_designers}</small>
                    <TgCode text={t.portfolio} />
                    <small className="text-muted-foreground">{t.only_for_designers}</small>
                  </span>

                  {portfolioFileName && <span className="text-muted-foreground">{portfolioFileName}</span>}
                </FormLabel>
                <FormControl>
                  <Input
                    {...portfolioRef}
                    className="sr-only w-1"
                    type="file"
                    onChange={(event) => {
                      field.onChange(event.target?.files ?? undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.website_url}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormDescription>{t.designers_execution}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedin_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.linkedin_url}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center">
          <Bubble arrowPosition="right-left">
            <button className="py-2 px-4 flex items-center gap-1 font-semibold" type="submit">
              <TgCode text={t.submit} />
            </button>
          </Bubble>
        </div>
      </form>
    </Form>
  );
}

export default ApplyForm;
