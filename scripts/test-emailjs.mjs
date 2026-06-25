/**
 * EmailJS send test — runs outside the browser using the REST API.
 * Usage: node scripts/test-emailjs.mjs
 */

const SERVICE_ID  = "service_i0vnlwe";
const TEMPLATE_ID = "template_y7jrahw";
const PUBLIC_KEY  = "isuAYzJNrAOVzn76D";

const payload = {
  service_id:  SERVICE_ID,
  template_id: TEMPLATE_ID,
  user_id:     PUBLIC_KEY,
  template_params: {
    from_name: "Test User",
    company:   "Test Company Pvt Ltd",
    reply_to:  "testbuyer@example.com",
    phone:     "+91 9999999999",
    product:   "Masoor Daal Classic",
    quantity:  "10 MT",
    message:   "This is an automated test email from the Abhidnya Agro website contact form. Please ignore.",
  },
};

console.log("Sending test email via EmailJS...\n");
console.log("Service ID : ", SERVICE_ID);
console.log("Template ID:", TEMPLATE_ID);
console.log("Payload    :", JSON.stringify(payload.template_params, null, 2), "\n");

const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
  method:  "POST",
  headers: { "Content-Type": "application/json" },
  body:    JSON.stringify(payload),
});

const text = await res.text();

if (res.ok) {
  console.log("✅  SUCCESS — EmailJS responded with:", text);
  console.log("\nCheck your inbox at abhidnyaagroindustries6001@gmail.com");
} else {
  console.error("❌  FAILED — HTTP", res.status);
  console.error("Response:", text);
  console.error("\nCommon reasons:");
  console.error("  • Template variables don't match (check EmailJS template)");
  console.error("  • Service not connected / Gmail not authorised");
  console.error("  • Public Key or Service/Template ID is wrong");
}
