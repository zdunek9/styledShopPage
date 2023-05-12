const categories = ["Contact Lenses", "FRAMES", "SUNGLASSES"];
const contactLensesTypes = ["Contact Lenses", "Lens Fluid", "Eye Drops", "Containers"];
const framesTypes = ["Custom Eyeglass", "Ready Glasses", "Accessories", "Children's Frames", "Men's Frames", "Women's Frames"];
const sunglassesTypes = ["Children's Sunglasses", "Accessories Sunglasses", "Mens's Sunglasses", "Women's Sunglasses"];
const brands = ["Bally", "BOSS", "Marni", "Polaroid", "Ray-Ban", "Santa Cruz"];
const frameColors = ["Transparent", "White", "Grey", "Silver", "Black", "Gold", "Multicolor"];
const lensColorTypes = ["Gradient", "Mirror", "Prizm", "Solid"];
const lensColors = ["Transparent", "Grey", "Silver", "Gold", "Blue"];
const frameTypes = ["Round eye", "Cat eye", "Wayfarer", "Aviator", "Clubmaster"];

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getDateRelease = () => {
  const year = Math.floor(Math.random() * 8) + 2015;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${year}/${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;
};

const products = [];

for (let i = 51; i <= 100; i++) {
  const category = getRandomItem(categories);
  let type;
  if (category === "Contact Lenses") {
    type = getRandomItem(contactLensesTypes);
  } else if (category === "FRAMES") {
    type = getRandomItem(framesTypes);
  } else {
    type = getRandomItem(sunglassesTypes);
  }

  const price = Math.floor(Math.random() * 971) + 29;
  const brand = getRandomItem(brands);
  const name = `${getDateRelease()} ${type} ${brand}`;
  const frameColor = (category === "Contact Lenses" || type.includes("Accessories")) ? "Blank" : getRandomItem(frameColors);
  const lensColorType = (category === "Contact Lenses" || type.includes("Accessories")) ? "Blank" : getRandomItem(lensColorTypes);
  const lensColor = (category === "Contact Lenses" || type.includes("Accessories")) ? "Blank" : getRandomItem(lensColors);
  const frameType = (category === "Contact Lenses" || type.includes("Accessories")) ? "Blank" : getRandomItem(frameTypes);
  const dateRelease = getDateRelease();
  const image = "";

  products.push({
    id: i,
    category: category,
    type: type,
    price: price,
    brand: brand,
    name: name,
    frameColor: frameColor,
    lensColorType: lensColorType,
    lensColor: lensColor,
    frameType: frameType,
    dateRelease: dateRelease,
    image: image
  });
}

console.log(JSON.stringify(products));
