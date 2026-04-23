"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/design-system/components/button/Button";
import { contactSchema } from "@/features/home/contact/conversation/schema";
import { z } from "zod";

type FormData = z.infer<typeof contactSchema>;

type Message = {
  role: "user" | "ai";
  content: string;
};

const steps = [
  { field: "name" },
  { field: "email" },
  { field: "service" },
  { field: "message" },
] as const;
const stepSchemas = {
  name: contactSchema.pick({ name: true }),
  email: contactSchema.pick({ email: true }),
  service: contactSchema.pick({ service: true }),
  message: contactSchema.pick({ message: true }),
};
const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Mobile App",
  "Branding",
  "SEO",
];

export default function ContactChat() {
  const t = useTranslations("Contact.Form");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: t("name.question") },
  ]);
  const [input, setInput] = useState("");
  const [data, setData] = useState<Partial<FormData>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  // const current = steps[step];

  const current = steps[step] ?? steps[steps.length - 1];

  /* ---------------- FAKE AI ---------------- */

  // const generateReply = (field: string, value: string) => {
  //   switch (field) {
  //     case "name":
  //       return `Nice to meet you ${value}! 👋 What's your email?`;

  //     case "email":
  //       return `Got it 👍 What service are you interested in?`;

  //     case "service":
  //       return `Awesome choice 🚀 Tell me more about your project.`;

  //     case "message":
  //       return `Perfect! Thanks for the details 🙌 We'll get back to you very soon.`;

  //     default:
  //       return "";
  //   }
  // };
  const generateReply = (field: string, value: string) => {
    switch (field) {
      case "name":
        return t("ai.nameReply", { name: value });

      case "email":
        return t("ai.emailReply");

      case "service":
        return t("ai.serviceReply");

      case "message":
        return t("ai.messageReply");

      default:
        return "";
    }
  };
  /* ---------------- SEND MESSAGE ---------------- */

  const handleSend = async () => {
    if (!input.trim()) return;

    const value = input;

    // validate
    // const result = contactSchema.safeParse({
    //   ...data,
    //   [current.field]: value,
    // });
    const schema = stepSchemas[current.field];

    const result = schema.safeParse({
      [current.field]: value,
    });

    if (!result.success) {
      const error = result.error.issues[0]?.message;
      setMessages((prev) => [
        ...prev,
        { role: "user", content: value },
        { role: "ai", content: error || "Invalid input" },
      ]);
      return;
    }

    // save data
    const newData = { ...data, [current.field]: value };
    setData(newData);

    // add user msg
    setMessages((prev) => [...prev, { role: "user", content: value }]);
    setInput("");

    // fake typing
    setIsTyping(true);

    // setTimeout(() => {
    //   const reply = generateReply(current.field, value);

    //   setMessages((prev) => [...prev, { role: "ai", content: reply }]);
    //   setIsTyping(false);
    //   // setStep((s) => s + 1);
    //   setStep((s) => Math.min(s + 1, steps.length - 1));
    // }, 600);
    setTimeout(() => {
      const reply = generateReply(current.field, value);

      setMessages((prev) => [...prev, { role: "ai", content: reply }]);
      setIsTyping(false);

      // ✅ لو مش آخر خطوة
      if (step < steps.length - 1) {
        setStep((s) => s + 1);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: t("ai.success"),
          },
        ]);

        // بعد شوية نغلق الشات
        setTimeout(() => {
          setIsFinished(true);
        }, 800);
      }
    }, 600);
  };

  /* ---------------- SERVICE SUGGESTIONS ---------------- */

  const showServices = current.field === "service";

  /* ---------------- UI ---------------- */
  const resetChat = () => {
    setStep(0);
    setData({});
    setInput("");
    setMessages([{ role: "ai", content: t("name.question") }]);
    setIsFinished(false);
  };
  if (isFinished) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 h-[300px] border border-border rounded-xl bg-card"
      >
        <p className="text-xl font-semibold">
          🚀 {t("successMessage") || "Message sent successfully"}
        </p>

        <Button onClick={resetChat}>
          {t("startNew") || "Start new conversation"}
        </Button>
      </motion.div>
    );
  }
  return (
    <div className="flex flex-col h-[500px] w-full border border-border rounded-xl bg-card">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed
                  ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* typing */}
        {isTyping && (
          <div className="text-sm text-muted-foreground">Typing...</div>
        )}
      </div>

      {/* Suggestions */}
      {showServices && (
        <div className="flex flex-wrap gap-2 px-4 pb-2">
          {SERVICES.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="px-3 py-1 text-xs rounded-full bg-muted hover:bg-border"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 p-3 border-t border-border">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t(`${current.field}.placeholder`)}
          className="flex-1 px-3 py-2 rounded-xl bg-muted border border-border outline-none focus:border-primary"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <Button onClick={handleSend}>{isArabic ? "إرسال" : "Send"}</Button>
      </div>
    </div>
  );
}
