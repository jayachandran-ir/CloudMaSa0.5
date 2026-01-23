// src/lib/api.ts

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINTS = {
  contactUs: `${API_BASE_URL}/contact-us`,
  freeConsultation: `${API_BASE_URL}/free-consultation`,
};

export async function submitContactForm(data: {
  name: string;
  company: string;
  email: string;
  source: string;
  message: string;
}) {
  const res = await fetch(API_ENDPOINTS.contactUs, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result;
}

export async function submitConsultationForm(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}) {
  const res = await fetch(API_ENDPOINTS.freeConsultation, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Request failed");
  }

  return result;
}
