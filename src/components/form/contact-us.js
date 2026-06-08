"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess("Message sent successfully!");
        reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name + Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium text-gray-600">Name</Label>
          <Input
            {...register("name")}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium text-gray-600">Phone</Label>
          <Input
            {...register("phone")}
            placeholder="Enter your phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email + Subject */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium text-gray-600">Email</Label>
          <Input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label className="text-sm font-medium text-gray-600">Subject</Label>
          <Input
            {...register("subject")}
            placeholder="Write subject"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col space-y-2">
        <Label className="text-sm font-medium text-gray-600">Message</Label>
        <textarea
          {...register("message")}
          placeholder="Write your message..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent transition resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-8 py-3 rounded-full bg-green-800 text-white font-medium tracking-wide hover:bg-green-900 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* Success */}
      {success && (
        <p className="text-green-700 font-medium text-center">{success}</p>
      )}
    </form>
  );
}
