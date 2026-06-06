"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const fieldVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const fields = [
    { name: "name", label: "Full Name", placeholder: "Your name", type: "text" },
    { name: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
    { name: "company", label: "Company", placeholder: "Your company", type: "text" },
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field, i) => (
          <motion.div
            key={field.name}
            custom={i}
            variants={fieldVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label className="block text-sm font-medium text-foreground">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </motion.div>
        ))}
      </div>

      {/* Message field */}
      <motion.div
        custom={3}
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <label className="block text-sm font-medium text-foreground">Message</label>
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </motion.div>

      {/* Submit button */}
      <motion.div
        custom={4}
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-full"
          size="lg"
        >
          {loading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 size-4" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      {/* Success message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800"
        >
          Thanks for reaching out! We'll be in touch soon.
        </motion.div>
      )}
    </form>
  )
}
