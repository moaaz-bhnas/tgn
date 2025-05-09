"use client";

import { T } from "@/types/i18n";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Bubble from "@/components/bubble";
import TgCode from "@/components/tg-code";
import { Career } from "@/lib/api/types";
import { MapPinIcon, BriefcaseIcon } from "lucide-react";

function ApplyForm({ t, career }: { t: T; career: Career }) {
  // Get file type application fields
  const fileFields = career.application_fields.filter((field) => field.type === "file");
  const textFields = career.application_fields.filter((field) => field.type === "text" || field.type === "number");

  // Create dynamic schema for file fields
  const fileFieldsSchema = fileFields.reduce(
    (acc, field) => ({
      ...acc,
      [field.id.toString()]:
        typeof window === "undefined"
          ? z.any().refine((file) => file?.length == 1, "File is required.")
          : z.instanceof(FileList).refine((file) => file?.length == 1, "File is required."),
    }),
    {}
  );

  // Create dynamic schema for text/number fields
  const textFieldsSchema = textFields.reduce(
    (acc, field) => ({
      ...acc,
      [field.id.toString()]: z.string().min(1, "This field is required"),
    }),
    {}
  );

  const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(2).max(50),
    yearsOfExperience: z
      .string()
      .min(1)
      .max(2)
      .regex(/^[0-9]+$/, "Please enter a valid number"),
    resume:
      typeof window === "undefined"
        ? z.any().refine((file) => file?.length == 1, "File is required.")
        : z.instanceof(FileList).refine((file) => file?.length == 1, "File is required."),
    coverLetter:
      typeof window === "undefined"
        ? z.any().refine((file) => file?.length == 1, "File is required.")
        : z.instanceof(FileList).refine((file) => file?.length == 1, "File is required."),
    ...fileFieldsSchema,
    ...textFieldsSchema,
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      yearsOfExperience: "",
      resume: null,
      coverLetter: null,
    },
  });

  // File preview
  const resumeFile = form.watch("resume");
  const coverLetterFile = form.watch("coverLetter");

  const resumeFileName = resumeFile?.length > 0 ? resumeFile[0].name : null;
  const coverLetterFileName = coverLetterFile?.length > 0 ? coverLetterFile[0].name : null;

  function onSubmit(values: FormData) {
    console.log(values);
  }

  const fileRef = form.register("resume");
  const coverLetterRef = form.register("coverLetter");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Job Description Section */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{career.title}</h2>
            <div className="flex items-center gap-2">
              <Badge className="px-2 py-1" variant="secondary">
                {career.type}
              </Badge>

              {career.paid && (
                <Badge className="px-2 py-1" variant="secondary">
                  Paid
                </Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4" />
              <span>{career.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="w-4 h-4" />
              <span>{career.workplace}</span>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground">{career.description}</p>
          </div>
        </div>

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
            name="yearsOfExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{`{${t.years_of_experience}}`}</FormLabel>
                <FormControl>
                  <Input className="tg-input" type="number" min="0" max="99" {...field} />
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
            name="coverLetter"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel className="bg-transparent border-2 rounded-none border-black w-full flex items-center flex-col justify-center py-8 gap-4">
                  <TgCode text={t.cover_letter} />

                  {coverLetterFileName && <span className="text-muted-foreground">{coverLetterFileName}</span>}
                </FormLabel>
                <FormControl>
                  <Input
                    {...coverLetterRef}
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

          {fileFields.map((field) => {
            const fieldId = field.id.toString();
            const fieldRef = form.register(fieldId as keyof FormData);
            const fieldFile = form.watch(fieldId as keyof FormData);
            const fieldFileName = fieldFile?.length > 0 ? fieldFile[0].name : null;

            return (
              <FormField
                key={field.id}
                control={form.control}
                name={fieldId as keyof FormData}
                render={({ field: formField }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="bg-transparent border-2 rounded-none border-black w-full flex items-center flex-col justify-center py-8 gap-4">
                      <TgCode text={field.label} />
                      {fieldFileName && <span className="text-muted-foreground">{fieldFileName}</span>}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...fieldRef}
                        className="sr-only w-1"
                        type="file"
                        onChange={(event) => {
                          formField.onChange(event.target?.files ?? undefined);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}

          {/* Map over career.application_fields and render a form field for each that has a type number or text */}
          {career.application_fields.map((field) => {
            if (field.type === "number" || field.type === "text") {
              const fieldId = field.id.toString();
              return (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={fieldId as keyof FormData}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        <Input className="tg-input" {...formField} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            }
          })}
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
