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
