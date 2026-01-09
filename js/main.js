// ================= ITEMS DATA =================
const items = {
  1: {
    image: "assets/images/item1.png",
    title: "J.F. Murray Raw Milk, Circa 1940s",
    condition: "Good, some fading and minor edge wear"
  },
  2: {
    image: "assets/images/item2.png",
    title: "Bush's Pasteurized Milk, Circa 1950s",
    condition: "Very Good, slight discoloration, clean surface"
  },
  3: {
    image: "assets/images/item3.png",
    title: "Belfry Farm Raw Jersey Milk, Circa 1930s",
    condition: "Fair, noticeable wear, some staining"
  },
  4: {
    image: "assets/images/item4.png",
    title: "Homogenized Milk - Pasteurized, Circa 1960s",
    condition: "Excellent, vibrant colors, minimal wear"
  },
  5: {
    image: "assets/images/item5.png",
    title: "Bush's Pasteurized Milk, Circa 1950",
    condition: "Good, some fading and minor edge wear"
  },
  6: {
    image: "assets/images/item6.png",
    title: "Drink More Milk - For Health and Prosperity, Circa 1950s",
    condition: "Good, some fading and minor edge wear"
  },
  7: {
    image: "assets/images/item7.png",
    title: "Cloverleaf Dairy Vitamin D Milk, Circa 1940s",
    condition: "Very Good, clean surface, slight edge wear"
  },
  8: {
    image: "assets/images/item8.png",
    title: "Carson Dairy Raw Milk, Circa 1950s",
    condition: "Fair, significant surface wear, some discoloration"
  },
  9: {
    image: "assets/images/item9.png",
    title: "R.L. Perkins Heavy Cream, Circa 1940s",
    condition: "Good, some fading and minor edge wear"
  },
  10: {
    image: "assets/images/item10.png",
    title: "Maple View Whipping Cream, Circa 1945s",
    condition: "Very Good, clean surface, slight edge wear"
  },
  11: {
    image: "assets/images/item11.png",
    title: "Peninsula Dairy Milk, Circa 1950s",
    condition: "Very Good, slight discoloration, clean surface"
  },
  12: {
    image: "assets/images/item12.png",
    title: "Hartwig Dairy Grade A Raw Milk, Circa 1930s",
    condition: "Fair, noticeable wear, some staining"
  }
};

// ============ CLICK HANDLER (HOME PAGE) ============
document.querySelectorAll(".image-container").forEach(item => {
  item.addEventListener("click", function () {
    const id = this.dataset.id;
    localStorage.setItem("selectedItem", id);
  });
});

// ============ LOAD DATA (SINGLE ENTRY PAGE) ============
const selectedId = localStorage.getItem("selectedItem");

if (selectedId && items[selectedId]) {
  const data = items[selectedId];

  const img = document.querySelector(".entry-image img");
  const text = document.querySelector(".entry-text");

  if (img && text) {
    img.src = data.image;
    text.innerHTML = `
      Item: ${selectedId}<br><br>
      ${data.title}<br><br>
      ${data.condition}<br><br>
      Cardboard, Appx. 1 5/8" in diameter, Private Collection
    `;
  }
}
