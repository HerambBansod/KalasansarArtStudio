"use client";

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const url = "https://kalasansarartstudio.hejtechdigital.workers.dev/"; // replace with your actual Worker URL

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success || result.status === "success" || response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                setStatus("error");
                alert(result.message || "Unknown server error");
            }
        } catch (error) {
            setStatus("error");
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <section>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    Send Message
                </h3>
                <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: "var(--font-body)" }}>
                    Please feel free to send us your queries or thoughts. We'd love to hear from you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="p-3 border border-gray-300 rounded-md w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className="p-3 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="p-3 border border-gray-300 rounded-md w-full"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="p-3 border border-gray-300 rounded-md w-full"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="4"
                        className="p-3 border border-gray-300 rounded-md w-full"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {status === "success" && (
                    <p className="mt-4 text-green-600 font-semibold">Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="mt-4 text-red-600 font-semibold">Error sending message. Please try again.</p>
                )}
            </section>
        </main>
    );
}
