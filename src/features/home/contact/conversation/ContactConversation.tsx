"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./schema";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/design-system/components/button/Button";
import { useLocale, useTranslations } from "next-intl";

type FormData = z.infer<typeof contactSchema>;

const steps = [
  { id: "name", field: "name" },
  { id: "email", field: "email" },
  { id: "service", field: "service" },
  { id: "message", field: "message" },
] as const;

export default function ContactConversation() {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const locale = useLocale();
  const t = useTranslations("Contact.Form");
  const tError = useTranslations("Contact.Errors");
  const common = useTranslations("Contact");

  const isArabic = locale === "ar";
  const isLastStep = step === steps.length - 1;

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting, touchedFields },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const current = steps[step];
  const next = async () => {
    const valid = await trigger(current.field);
    if (!valid) return;
    clearErrors();
    setStep((s) => s + 1);
  };

  const prev = () => {
    setStep((s) => Math.max(0, s - 1));
  };

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 1200));
      toast.success(common("success"));
      setIsSuccess(true);
      reset();
      setStep(0);
    } catch {
      toast.error(common("error"));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4"
      >
        <p className="text-2xl font-semibold">{t("successMessage")}</p>

        <Button onClick={() => setIsSuccess(false)}>{t("sendAnother")}</Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      noValidate
    >
      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl font-semibold"
        >
          {t(`${current.id}.question`)}
        </motion.div>
      </AnimatePresence>

      {/* Input */}
      <motion.div layout>
        <div>
          <input
            key={current.field}
            {...register(current.field)}
            placeholder={t(`${current.id}.placeholder`)}
            className={` w-full px-4 py-3 rounded-xl
              bg-muted border border-border
              outline-none focus:border-primary
              transition ${errors[current.field] && "border-red-500"}`}
          />

          {/* fixed height → no layout shift */}
          <div className="h-[25px] my-2">
            {errors[current.field] && touchedFields[current.field] && (
              <span className="text-xs text-red-500">
                {tError(errors[current.field]?.message as string)}
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          {step > 0 && (
            <Button type="button" onClick={prev}>
              {t("prev")}
            </Button>
          )}

          {!isLastStep ? (
            <Button
              type="button"
              onClick={next}
              rightIcon={isArabic ? "←" : "→"}
            >
              {t("next")}
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("sending") : t("submit")}
            </Button>
          )}
        </div>
      </motion.div>
    </form>
  );
}

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { contactSchema } from "./schema";
// import { z } from "zod";
// import { toast } from "sonner";
// import { Button } from "@/design-system/components/button/Button";
// import { useLocale, useTranslations } from "next-intl";

// type FormData = z.infer<typeof contactSchema>;

// const steps = [
//   { id: "name", field: "name" },
//   { id: "email", field: "email" },
//   { id: "service", field: "service" },
//   { id: "message", field: "message" },
// ] as const;

// /* ---------------- AI LOGIC ---------------- */

// const SERVICES = [
//   "Web Development",
//   "UI/UX Design",
//   "Mobile App",
//   "Branding",
//   "SEO",
// ];

// const detectService = (message?: string) => {
//   if (!message) return "";

//   const msg = message.toLowerCase();

//   if (msg.includes("website")) return "Web Development";
//   if (msg.includes("app")) return "Mobile App";
//   if (msg.includes("design")) return "UI/UX Design";
//   if (msg.includes("brand")) return "Branding";
//   if (msg.includes("seo")) return "SEO";

//   return "";
// };

// export default function ContactConversation() {
//   const [step, setStep] = useState(0);
//   const [isSuccess, setIsSuccess] = useState(false);

//   /* AI states */
//   const [preview, setPreview] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const typingRef = useRef<NodeJS.Timeout | null>(null);

//   const locale = useLocale();
//   const t = useTranslations("Contact.Form");
//   const tError = useTranslations("Contact.Errors");
//   const common = useTranslations("Contact");

//   const isArabic = locale === "ar";
//   const isLastStep = step === steps.length - 1;

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     reset,
//     watch,
//     setValue,
//     formState: { errors, isSubmitting, touchedFields },
//     clearErrors,
//   } = useForm<FormData>({
//     resolver: zodResolver(contactSchema),
//     mode: "onSubmit",
//     defaultValues: {
//       name: "",
//       email: "",
//       service: "",
//       message: "",
//     },
//   });

//   const values = watch();

//   /* ---------------- AUTO SERVICE SUGGEST ---------------- */

//   useEffect(() => {
//     if (!values.service && values.message) {
//       const detected = detectService(values.message);
//       if (detected) {
//         setValue("service", detected, { shouldValidate: true });
//       }
//     }
//   }, [values.message]);

//   /* ---------------- AI REPLY GENERATION ---------------- */

//   const aiReply = useMemo(() => {
//     if (!values.name) return "";

//     return `Hi ${values.name},

// Thanks for reaching out${values.service ? ` about ${values.service}` : ""}.
// ${
//   values.message
//     ? `\n\n"${values.message.slice(0, 120)}${values.message.length > 120 ? "..." : ""}"\n`
//     : ""
// }

// Our team will review your request and get back to you shortly.

// Best regards,
// Nexera Team 🚀`;
//   }, [values]);

//   /* ---------------- TYPING EFFECT ---------------- */

//   useEffect(() => {
//     if (!aiReply) {
//       setPreview("");
//       return;
//     }

//     setIsTyping(true);
//     setPreview("");

//     if (typingRef.current) clearInterval(typingRef.current);

//     let i = 0;

//     typingRef.current = setInterval(() => {
//       i++;
//       setPreview(aiReply.slice(0, i));

//       if (i >= aiReply.length) {
//         setIsTyping(false);
//         if (typingRef.current) clearInterval(typingRef.current);
//       }
//     }, 8); // ⚡ fast but smooth

//     return () => {
//       if (typingRef.current) clearInterval(typingRef.current);
//     };
//   }, [aiReply]);

//   /* ---------------- NAVIGATION ---------------- */

//   const current = steps[step];

//   const next = async () => {
//     const valid = await trigger(current.field);
//     if (!valid) return;
//     clearErrors();
//     setStep((s) => s + 1);
//   };

//   const prev = () => setStep((s) => Math.max(0, s - 1));

//   const onSubmit = async (data: FormData) => {
//     try {
//       await new Promise((r) => setTimeout(r, 1200));
//       toast.success(common("success"));
//       setIsSuccess(true);
//       reset();
//       setStep(0);
//     } catch {
//       toast.error(common("error"));
//     }
//   };

//   /* ---------------- SUCCESS ---------------- */

//   if (isSuccess) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col items-start gap-4"
//       >
//         <p className="text-2xl font-semibold">{t("successMessage")}</p>
//         <Button onClick={() => setIsSuccess(false)}>{t("sendAnother")}</Button>
//       </motion.div>
//     );
//   }

//   /* ---------------- UI ---------------- */

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col gap-6"
//       noValidate
//       aria-live="polite"
//     >
//       {/* Question */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={step}
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -25 }}
//           className="text-2xl md:text-3xl font-semibold"
//         >
//           {t(`${current.id}.question`)}
//         </motion.div>
//       </AnimatePresence>

//       {/* Input */}
//       <div>
//         <input
//           key={current.field}
//           {...register(current.field)}
//           placeholder={t(`${current.id}.placeholder`)}
//           aria-invalid={!!errors[current.field]}
//           className={`w-full px-4 py-3 rounded-xl
//             bg-muted border border-border
//             outline-none focus:border-primary
//             transition
//             ${errors[current.field] && "border-red-500"}`}
//         />

//         <div className="h-[22px] mt-2">
//           {errors[current.field] && touchedFields[current.field] && (
//             <span className="text-xs text-red-500">
//               {tError(errors[current.field]?.message as string)}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* 🔥 AI PREVIEW */}
//       {isLastStep && (
//         <div className="space-y-3">
//           <p className="text-xs text-muted-foreground">{t("aiPreview")}</p>

//           <div
//             className="p-4 rounded-2xl border border-border bg-card max-w-[600px]"
//             role="status"
//           >
//             {/* Skeleton */}
//             {isTyping && !preview ? (
//               <div className="space-y-2">
//                 <div className="h-3 w-3/4 skeleton rounded" />
//                 <div className="h-3 w-1/2 skeleton rounded" />
//                 <div className="h-3 w-2/3 skeleton rounded" />
//               </div>
//             ) : (
//               <p className="text-sm whitespace-pre-line leading-relaxed">
//                 {preview}
//                 {isTyping && <span className="animate-pulse">|</span>}
//               </p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Buttons */}
//       <div className="flex gap-2">
//         {step > 0 && (
//           <Button type="button" onClick={prev}>
//             {t("prev")}
//           </Button>
//         )}

//         {!isLastStep ? (
//           <Button type="button" onClick={next} rightIcon={isArabic ? "←" : "→"}>
//             {t("next")}
//           </Button>
//         ) : (
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? t("sending") : t("submit")}
//           </Button>
//         )}
//       </div>
//     </form>
//   );
// }

// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { contactSchema } from "./schema";
// import { z } from "zod";
// import { toast } from "sonner";
// import { Button } from "@/design-system/components/button/Button";
// import { useLocale, useTranslations } from "next-intl";

// type FormData = z.infer<typeof contactSchema>;

// const steps = [
//   { id: "name", field: "name" },
//   { id: "email", field: "email" },
//   { id: "service", field: "service" },
//   { id: "message", field: "message" },
// ] as const;

// /* ---------------- AI / SERVICES ---------------- */

// const SERVICES = [
//   "Web Development",
//   "UI/UX Design",
//   "Mobile App",
//   "Branding",
//   "SEO",
// ];

// const detectService = (message?: string) => {
//   if (!message) return "";

//   const msg = message.toLowerCase();

//   if (msg.includes("website")) return "Web Development";
//   if (msg.includes("app")) return "Mobile App";
//   if (msg.includes("design")) return "UI/UX Design";
//   if (msg.includes("brand")) return "Branding";
//   if (msg.includes("seo")) return "SEO";

//   return "";
// };

// export default function ContactConversation() {
//   const [step, setStep] = useState(0);
//   const [isSuccess, setIsSuccess] = useState(false);

//   /* AI states */
//   const [preview, setPreview] = useState("");
//   const [lockedReply, setLockedReply] = useState("");
//   const [hasGenerated, setHasGenerated] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);

//   const typingRef = useRef<NodeJS.Timeout | null>(null);

//   const locale = useLocale();
//   const t = useTranslations("Contact.Form");
//   const tError = useTranslations("Contact.Errors");
//   const common = useTranslations("Contact");

//   const isArabic = locale === "ar";
//   const isLastStep = step === steps.length - 1;

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     reset,
//     watch,
//     setValue,
//     formState: { errors, isSubmitting, touchedFields },
//     clearErrors,
//   } = useForm<FormData>({
//     resolver: zodResolver(contactSchema),
//     mode: "onSubmit",
//     defaultValues: {
//       name: "",
//       email: "",
//       service: "",
//       message: "",
//     },
//   });

//   const values = watch();

//   /* ---------------- AUTO SERVICE DETECTION ---------------- */

//   useEffect(() => {
//     if (!values.service && values.message) {
//       const detected = detectService(values.message);
//       if (detected) {
//         setValue("service", detected, { shouldValidate: true });
//       }
//     }
//   }, [values.message, values.service, setValue]);

//   /* ---------------- AI GENERATION ---------------- */

//   const aiReply = useMemo(() => {
//     if (!values.name) return "";

//     return `Hi ${values.name},

// Thanks for reaching out${values.service ? ` about ${values.service}` : ""}.
// ${
//   values.message
//     ? `\n\n"${values.message.slice(0, 120)}${
//         values.message.length > 120 ? "..." : ""
//       }"\n`
//     : ""
// }

// Our team will review your request and get back to you shortly.

// Best regards,
// Nexera Team 🚀`;
//   }, [values]);

//   /* ---------------- LOCK REPLY (fix re-render glitch) ---------------- */

//   useEffect(() => {
//     if (isLastStep && aiReply && !hasGenerated) {
//       setLockedReply(aiReply);
//       setHasGenerated(true);
//     }
//   }, [isLastStep, aiReply, hasGenerated]);

//   /* ---------------- TYPING EFFECT ---------------- */

//   useEffect(() => {
//     if (!lockedReply) {
//       setPreview("");
//       return;
//     }

//     setIsTyping(true);
//     setPreview("");

//     if (typingRef.current) clearInterval(typingRef.current);

//     let i = 0;

//     typingRef.current = setInterval(() => {
//       i++;
//       setPreview(lockedReply.slice(0, i));

//       if (i >= lockedReply.length) {
//         setIsTyping(false);
//         if (typingRef.current) clearInterval(typingRef.current);
//       }
//     }, 8);

//     return () => {
//       if (typingRef.current) clearInterval(typingRef.current);
//     };
//   }, [lockedReply]);

//   /* ---------------- RESET AI AFTER SUCCESS ---------------- */

//   useEffect(() => {
//     if (isSuccess) {
//       setPreview("");
//       setLockedReply("");
//       setHasGenerated(false);
//     }
//   }, [isSuccess]);

//   /* ---------------- NAVIGATION ---------------- */

//   const current = steps[step];

//   const next = async () => {
//     const valid = await trigger(current.field);
//     if (!valid) return;
//     clearErrors();
//     setStep((s) => s + 1);
//   };

//   const prev = () => setStep((s) => Math.max(0, s - 1));

//   const onSubmit = async (data: FormData) => {
//     try {
//       await new Promise((r) => setTimeout(r, 1200));
//       toast.success(common("success"));
//       setIsSuccess(true);
//       reset();
//       setStep(0);
//     } catch {
//       toast.error(common("error"));
//     }
//   };

//   /* ---------------- SUCCESS ---------------- */

//   if (isSuccess) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col items-start gap-4"
//       >
//         <p className="text-2xl font-semibold">{t("successMessage")}</p>
//         <Button onClick={() => setIsSuccess(false)}>{t("sendAnother")}</Button>
//       </motion.div>
//     );
//   }

//   /* ---------------- UI ---------------- */

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="flex flex-col gap-6"
//       noValidate
//       aria-live="polite"
//     >
//       {/* Question */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={step}
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -25 }}
//           className="text-2xl md:text-3xl font-semibold"
//         >
//           {t(`${current.id}.question`)}
//         </motion.div>
//       </AnimatePresence>

//       {/* SERVICE SUGGESTIONS */}
//       {current.field === "service" && (
//         <div className="flex flex-wrap gap-2">
//           {SERVICES.map((s) => (
//             <button
//               key={s}
//               type="button"
//               onClick={() => setValue("service", s, { shouldValidate: true })}
//               className={`px-3 py-1 rounded-full text-xs border transition
//                 ${
//                   values.service === s
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-muted hover:bg-border"
//                 }`}
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Input */}
//       <div>
//         <input
//           key={current.field}
//           {...register(current.field)}
//           placeholder={t(`${current.id}.placeholder`)}
//           aria-invalid={!!errors[current.field]}
//           className={`w-full px-4 py-3 rounded-xl
//             bg-muted border border-border
//             outline-none focus:border-primary
//             transition
//             ${errors[current.field] && "border-red-500"}`}
//         />

//         <div className="h-[22px] mt-2">
//           {errors[current.field] && touchedFields[current.field] && (
//             <span className="text-xs text-red-500">
//               {tError(errors[current.field]?.message as string)}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* 🔥 AI PREVIEW (NO LAYOUT SHIFT) */}
//       <div className="min-h-[140px]">
//         <AnimatePresence mode="wait">
//           {isLastStep && (
//             <motion.div
//               key="ai"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               className="space-y-3"
//             >
//               <p className="text-xs text-muted-foreground">{t("aiPreview")}</p>

//               <div className="relative p-4 rounded-2xl bg-card border border-border max-w-[600px]">
//                 {/* bubble tail */}
//                 <div className="absolute -left-2 top-4 w-3 h-3 bg-card border-l border-t border-border rotate-45" />

//                 {!lockedReply ? (
//                   <div className="space-y-2">
//                     <div className="h-3 w-3/4 skeleton rounded" />
//                     <div className="h-3 w-1/2 skeleton rounded" />
//                   </div>
//                 ) : (
//                   <p className="text-sm whitespace-pre-line leading-relaxed">
//                     {preview}
//                     {isTyping && <span className="animate-pulse">|</span>}
//                   </p>
//                 )}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-2">
//         {step > 0 && (
//           <Button type="button" onClick={prev}>
//             {t("prev")}
//           </Button>
//         )}

//         {!isLastStep ? (
//           <Button type="button" onClick={next} rightIcon={isArabic ? "←" : "→"}>
//             {t("next")}
//           </Button>
//         ) : (
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? t("sending") : t("submit")}
//           </Button>
//         )}
//       </div>
//     </form>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslations, useLocale } from "next-intl";
// import { Button } from "@/design-system/components/button/Button";
// import { contactSchema } from "./schema";
// import { z } from "zod";

// type FormData = z.infer<typeof contactSchema>;

// type Message = {
//   role: "user" | "ai";
//   content: string;
// };

// const steps = [
//   { field: "name" },
//   { field: "email" },
//   { field: "service" },
//   { field: "message" },
// ] as const;
// const stepSchemas = {
//   name: contactSchema.pick({ name: true }),
//   email: contactSchema.pick({ email: true }),
//   service: contactSchema.pick({ service: true }),
//   message: contactSchema.pick({ message: true }),
// };
// const SERVICES = [
//   "Web Development",
//   "UI/UX Design",
//   "Mobile App",
//   "Branding",
//   "SEO",
// ];

// export default function ContactChat() {
//   const t = useTranslations("Contact.Form");
//   const locale = useLocale();
//   const isArabic = locale === "ar";

//   const [step, setStep] = useState(0);
//   const [messages, setMessages] = useState<Message[]>([
//     { role: "ai", content: t("name.question") },
//   ]);
//   const [input, setInput] = useState("");
//   const [data, setData] = useState<Partial<FormData>>({});
//   const [isTyping, setIsTyping] = useState(false);
//   const [isFinished, setIsFinished] = useState(false);
//   // const current = steps[step];

//   const current = steps[step] ?? steps[steps.length - 1];

//   /* ---------------- FAKE AI ---------------- */

//   const generateReply = (field: string, value: string) => {
//     switch (field) {
//       case "name":
//         return `Nice to meet you ${value}! 👋 What's your email?`;

//       case "email":
//         return `Got it 👍 What service are you interested in?`;

//       case "service":
//         return `Awesome choice 🚀 Tell me more about your project.`;

//       case "message":
//         return `Perfect! Thanks for the details 🙌 We'll get back to you very soon.`;

//       default:
//         return "";
//     }
//   };

//   /* ---------------- SEND MESSAGE ---------------- */

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const value = input;

//     // validate
//     // const result = contactSchema.safeParse({
//     //   ...data,
//     //   [current.field]: value,
//     // });
//     const schema = stepSchemas[current.field];

//     const result = schema.safeParse({
//       [current.field]: value,
//     });

//     if (!result.success) {
//       const error = result.error.issues[0]?.message;
//       setMessages((prev) => [
//         ...prev,
//         { role: "user", content: value },
//         { role: "ai", content: error || "Invalid input" },
//       ]);
//       return;
//     }

//     // save data
//     const newData = { ...data, [current.field]: value };
//     setData(newData);

//     // add user msg
//     setMessages((prev) => [...prev, { role: "user", content: value }]);
//     setInput("");

//     // fake typing
//     setIsTyping(true);

//     // setTimeout(() => {
//     //   const reply = generateReply(current.field, value);

//     //   setMessages((prev) => [...prev, { role: "ai", content: reply }]);
//     //   setIsTyping(false);
//     //   // setStep((s) => s + 1);
//     //   setStep((s) => Math.min(s + 1, steps.length - 1));
//     // }, 600);
//     setTimeout(() => {
//       const reply = generateReply(current.field, value);

//       setMessages((prev) => [...prev, { role: "ai", content: reply }]);
//       setIsTyping(false);

//       // ✅ لو مش آخر خطوة
//       if (step < steps.length - 1) {
//         setStep((s) => s + 1);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           {
//             role: "ai",
//             content: "🚀 Your request has been sent successfully!",
//           },
//         ]);

//         // بعد شوية نغلق الشات
//         setTimeout(() => {
//           setIsFinished(true);
//         }, 800);
//       }
//     }, 600);
//   };

//   /* ---------------- SERVICE SUGGESTIONS ---------------- */

//   const showServices = current.field === "service";

//   /* ---------------- UI ---------------- */
//   const resetChat = () => {
//     setStep(0);
//     setData({});
//     setInput("");
//     setMessages([{ role: "ai", content: t("name.question") }]);
//     setIsFinished(false);
//   };
//   if (isFinished) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex flex-col items-center justify-center gap-4 h-[300px] border border-border rounded-xl bg-card"
//       >
//         <p className="text-xl font-semibold">
//           🚀 {t("successMessage") || "Message sent successfully"}
//         </p>

//         <Button onClick={resetChat}>
//           {t("startNew") || "Start new conversation"}
//         </Button>
//       </motion.div>
//     );
//   }
//   return (
//     <div className="flex flex-col h-[500px] w-full border border-border rounded-xl bg-card">
//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         <AnimatePresence initial={false}>
//           {messages.map((msg, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`flex ${
//                 msg.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed
//                   ${
//                     msg.role === "user"
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-muted text-foreground"
//                   }`}
//               >
//                 {msg.content}
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>

//         {/* typing */}
//         {isTyping && (
//           <div className="text-sm text-muted-foreground">Typing...</div>
//         )}
//       </div>

//       {/* Suggestions */}
//       {showServices && (
//         <div className="flex flex-wrap gap-2 px-4 pb-2">
//           {SERVICES.map((s) => (
//             <button
//               key={s}
//               onClick={() => setInput(s)}
//               className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-border"
//             >
//               {s}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Input */}
//       <div className="flex gap-2 p-3 border-t border-border">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder={t(`${current.field}.placeholder`)}
//           className="flex-1 px-3 py-2 rounded-xl bg-muted border border-border outline-none focus:border-primary"
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />

//         <Button onClick={handleSend}>{isArabic ? "إرسال" : "Send"}</Button>
//       </div>
//     </div>
//   );
// }
