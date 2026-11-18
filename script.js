document.addEventListener("DOMContentLoaded", () => {
    // التأكد من تحميل البيانات وعرضها
    if (window.storeData) {
        const dateBadge = document.getElementById("priceDateBadge");
        if (dateBadge) {
            dateBadge.innerText = `📅 تحديث الأسعار لشهر: ${storeData.updateDate}`;
        }

        const container = document.getElementById("pricesContainer");
        if (container) {
            container.innerHTML = "";
            storeData.items.forEach(item => {
                const card = document.createElement("div");
                card.className = "price-card";
                card.innerHTML = `
                    <div class="item-info">
                        <span class="item-name">${item.name}</span>
                        <span class="item-note">${item.note}</span>
                    </div>
                    <div class="item-price">${item.price}</div>
                `;
                container.appendChild(card);
            });
        }
    }
});