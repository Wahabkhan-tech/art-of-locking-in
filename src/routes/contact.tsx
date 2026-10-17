import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Art of Locking In" },
      { name: "description", content: "Get in touch about The Art of Locking In by Andrew Rusch." },
      { property: "og:title", content: "Contact — The Art of Locking In" },
      { property: "og:description", content: "Reach out about the book." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});
type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const field = "w-full border-0 border-b border-input bg-transparent py-3 text-lg text-ivory placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition-colors";

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "pending">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Errors = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("pending");
  }

  return (
    <>
      <PageIntro eyebrow="Contact" title={<>Start the <span className="text-gold-gradient">conversation.</span></>}>
        For enquiries about the book, reach out below. {SITE.contactEmail && <>Or write to <a className="text-champagne" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</>}
      </PageIntro>
      <section className="px-6 py-20 md:px-10">
        <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-3xl gap-10">
          {(["name", "email", "subject"] as const).map((k) => (
            <label key={k} className="block">
              <span className="eyebrow">{k}</span>
              <input name={k} type={k === "email" ? "email" : "text"} aria-invalid={!!errors[k]} className={field} autoComplete={k === "subject" ? "off" : k} />
              {errors[k] && <span className="mt-2 block text-sm text-destructive">{errors[k]}</span>}
            </label>
          ))}
          <label className="block">
            <span className="eyebrow">Message</span>
            <textarea name="message" rows={5} aria-invalid={!!errors.message} className={`${field} resize-none`} />
            {errors.message && <span className="mt-2 block text-sm text-destructive">{errors.message}</span>}
          </label>
          <p className="text-xs text-muted-foreground">Your details are used only to reply to your message.</p>
          <div><Button type="submit" variant="gold" size="xl">Send message</Button></div>
          {state === "pending" && (
            <p role="status" className="border border-border p-5 text-sm text-champagne">
              Thanks — your message looks good. Online sending isn't connected yet, so it hasn't been delivered.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
