"use client";

import { T } from "@/types/i18n";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Bubble from "@/components/bubble";
import TgCode from "@/components/tg-code";
import { Textarea } from "@/components/ui/textarea";
import { createApi } from "@/lib/api";
import { Locale } from "@/types/locale";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(2).max(50),
  industry: z.string().min(2).max(50).optional(),
  story: z.string(),
});

function ContactUsForm({ t, locale }: { t: T; locale: Locale }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      industry: "",
      story: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", `${values.firstName} ${values.lastName}`);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", values.industry ? `Industry: ${values.industry}` : "Contact Form Submission");
      formData.append("message", values.story);

      const api = createApi({ language: locale });
      const response = await api.submitContact(formData);

      if (response.success) {
        toast({
          title: t.success_title || "Success",
          description: t.success_message || "Your message has been sent successfully.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: t.error_title || "Error",
          description: t.error_message || "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t.error_title || "Error",
        description: t.error_message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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
            <button className="py-2 px-4 flex items-center gap-1 font-semibold" type="submit" disabled={isSubmitting}>
              <TgCode text={isSubmitting ? t.submitting : t.submit} />
            </button>
          </Bubble>
        </div>
      </form>
    </Form>
  );
}

export default ContactUsForm;
