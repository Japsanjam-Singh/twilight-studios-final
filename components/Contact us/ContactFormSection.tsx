"use client"

import { useState } from "react"

const serviceOptions = [
  "Portrait Photography",
  "Wedding Coverage",
  "Event Coverage",
  "Videography",
  "Brand Content",
  "Drone Shoot",
  "Studio Rental",
  "Other",
]

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-[#0b0b0b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#f5a623]">
              Send an Inquiry
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Tell Us About Your Session
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Fill out the form with your details, preferred service, and any
              special requests. We’ll review your inquiry and get back to you to
              confirm availability and next steps.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#111111] p-6">
              <p className="text-sm leading-7 text-gray-300">
                This form can be used for photoshoots, event bookings, studio
                rental, or general questions.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-[0_0_30px_rgba(0,0,0,0.25)] sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#f5a623]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#f5a623]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#f5a623]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-[#f5a623]"
                  >
                    <option value="" className="bg-[#0b0b0b] text-gray-400">
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#0b0b0b] text-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferredDate"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Preferred Date
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition focus:border-[#f5a623]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your booking, event, or creative idea..."
                  className="w-full rounded-2xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#f5a623]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-[#f5a623] px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-[#ffb648]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}