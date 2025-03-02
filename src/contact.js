export default function contactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 555-123-4567";

  const address = document.createElement("p");
  address.textContent = "🏠 123 Gourmet Street, Food City";

  content.append(title, phone, address);
}
