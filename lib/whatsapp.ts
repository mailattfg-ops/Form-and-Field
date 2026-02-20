import { WHATSAPP_NUMBER } from "@/data/site";

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatWhatsAppMessage(data: Record<string, string>) {
  const lines = ["New Consultation Inquiry", ""];
  
  if (data.name) lines.push(`Name: ${data.name}`);
  if (data.phone) lines.push(`Phone: ${data.phone}`);
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.service) lines.push(`Service: ${data.service}`);
  if (data.qualification) lines.push(`Qualification: ${data.qualification}`);
  if (data.percentage) lines.push(`Percentage/CGPA: ${data.percentage}%`);
  if (data.country) lines.push(`Interested Country: ${data.country}`);
  if (data.message) lines.push(`Message: ${data.message}`);
  
  return lines.join("\n");
}
