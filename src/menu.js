export default function menuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  menuList.innerHTML = `
    <li>Classic Pizza - $14.99</li>
    <li>Pasta Carbonara - $16.99</li>
    <li>Caesar Salad - $12.99</li>
  `;

  content.append(title, menuList);
}
