import emailjs from "@emailjs/browser";

export async function sendStatusEmail({
  studentName,
  toEmail,
  referenceNumber,
  status,
  remarks,
}) {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        student_name: studentName,
        to_email: toEmail,
        reference_number: referenceNumber,
        status: status,
        remarks: remarks || "No remarks were provided.",
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
}