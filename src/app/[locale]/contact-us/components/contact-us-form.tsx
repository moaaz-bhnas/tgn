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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(2).max(50),
  industry: z.string().min(2).max(50).optional(),
  story: z.string(),
});

function ContactUsForm({ t }: { t: T }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
                  <Input type="email" className="tg-input" {...field} />
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
                  <Input type="tel" className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.industry}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="story"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{`{${t.story}}`}</FormLabel>
                <FormControl>
                  <Textarea className="tg-input" {...field} />
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

export default ContactUsForm;
