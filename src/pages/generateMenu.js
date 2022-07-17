function generateMenu() {
  // Content
  const content = document.createElement("div");
  content.classList.add("menuContent");

  // Meat and Cheese
  const meatCheeseFieldset = document.createElement("fieldset");
  meatCheeseFieldset.classList.add("fieldset");
  content.appendChild(meatCheeseFieldset);

  // Legend
  const meatCheeseLegend = document.createElement("legend");
  meatCheeseLegend.classList.add("legend");
  meatCheeseLegend.innerText = "MEAT & CHEESE";
  meatCheeseFieldset.appendChild(meatCheeseLegend);

  // Content
  const meatCheeseContent = document.createElement("div");
  meatCheeseContent.classList.add("contentSection");
  meatCheeseFieldset.appendChild(meatCheeseContent);

  const MOLINARI_SOPRESSATA = document.createElement("p");
  MOLINARI_SOPRESSATA.textContent = "MOLINARI SOPRESSATA 6";
  meatCheeseContent.appendChild(MOLINARI_SOPRESSATA);

  const HOT_COPPA = document.createElement("p");
  HOT_COPPA.textContent = "HOT COPPA 7";
  meatCheeseContent.appendChild(HOT_COPPA);

  const PROSCIUTTO_DI_SAN_DANIELE = document.createElement("p");
  PROSCIUTTO_DI_SAN_DANIELE.textContent = "PROSCIUTTO DI SAN DANIELE 8";
  meatCheeseContent.appendChild(PROSCIUTTO_DI_SAN_DANIELE);

  const BRESAOLA = document.createElement("p");
  BRESAOLA.textContent = "BRESAOLA 7";
  meatCheeseContent.appendChild(BRESAOLA);

  const PRAIRIE_BREEZE_CHEDDAR = document.createElement("p");
  PRAIRIE_BREEZE_CHEDDAR.textContent = "PRAIRIE BREEZE CHEDDAR 5";
  meatCheeseContent.appendChild(PRAIRIE_BREEZE_CHEDDAR);

  const AGED_MANCHEGO = document.createElement("p");
  AGED_MANCHEGO.textContent = "AGED MANCHEGO 4";
  meatCheeseContent.appendChild(AGED_MANCHEGO);

  const DOLCE_GORGONZOLA = document.createElement("p");
  DOLCE_GORGONZOLA.textContent = "DOLCE GORGONZOLA 5";
  meatCheeseContent.appendChild(DOLCE_GORGONZOLA);

  const PIMENTO_CHEESE = document.createElement("p");
  PIMENTO_CHEESE.textContent = "PIMENTO CHEESE 6";
  meatCheeseContent.appendChild(PIMENTO_CHEESE);

  // Snacks
  const snacksFieldset = document.createElement("fieldset");
  snacksFieldset.classList.add("fieldset");
  content.appendChild(snacksFieldset);

  // Legend
  const snacksLegend = document.createElement("legend");
  snacksLegend.classList.add("legend");
  snacksLegend.innerText = "SNACKS";
  snacksFieldset.appendChild(snacksLegend);

  // Content
  const snacksContent = document.createElement("div");
  snacksContent.classList.add("contentSection");
  snacksFieldset.appendChild(snacksContent);

  const GOCHUJANG_BRUSSELS_SPROUTS = document.createElement("p");
  GOCHUJANG_BRUSSELS_SPROUTS.textContent = "GOCHUJANG BRUSSELS SPROUTS 7";
  snacksContent.appendChild(GOCHUJANG_BRUSSELS_SPROUTS);

  const CRUSTY_BREAD_GARLIC_OIL_BALSAMIC = document.createElement("p");
  CRUSTY_BREAD_GARLIC_OIL_BALSAMIC.textContent =
    "CRUSTY BREAD, GARLIC OIL & BALSAMIC 4";
  snacksContent.appendChild(CRUSTY_BREAD_GARLIC_OIL_BALSAMIC);

  const GRILLED_ASPARAGUS = document.createElement("p");
  GRILLED_ASPARAGUS.textContent = "GRILLED ASPARAGUS 5";
  snacksContent.appendChild(GRILLED_ASPARAGUS);

  const MARINATED_OLIVES = document.createElement("p");
  MARINATED_OLIVES.textContent = "MARINATED OLIVES 5";
  snacksContent.appendChild(MARINATED_OLIVES);

  const MARCONA_ALMONDS = document.createElement("p");
  MARCONA_ALMONDS.textContent = "MARCONA ALMONDS 4";
  snacksContent.appendChild(MARCONA_ALMONDS);

  const PROSCIUTTO_DEVILED_EGGS = document.createElement("p");
  PROSCIUTTO_DEVILED_EGGS.textContent = "PROSCIUTTO DEVILED EGGS 5";
  snacksContent.appendChild(PROSCIUTTO_DEVILED_EGGS);

  // Salads
  const saladsFieldset = document.createElement("fieldset");
  saladsFieldset.classList.add("fieldset");
  content.appendChild(saladsFieldset);

  // Legend
  const saladsLegend = document.createElement("legend");
  saladsLegend.classList.add("legend");
  saladsLegend.innerText = "SALADS";
  saladsFieldset.appendChild(saladsLegend);

  // Content
  const saladsContent = document.createElement("div");
  saladsContent.classList.add("contentSection");
  saladsFieldset.appendChild(saladsContent);

  const CHEAP_HOUSE_SALAD = document.createElement("p");
  CHEAP_HOUSE_SALAD.textContent = "CHEAP HOUSE SALAD 7";
  const CHEAP_HOUSE_SALAD_SubText = document.createElement("p");
  CHEAP_HOUSE_SALAD_SubText.classList.add("subText");
  CHEAP_HOUSE_SALAD_SubText.textContent = "buttermilk ranch";
  CHEAP_HOUSE_SALAD.appendChild(CHEAP_HOUSE_SALAD_SubText);
  saladsContent.appendChild(CHEAP_HOUSE_SALAD);

  const LITTLE_GEM_CAESAR = document.createElement("p");
  LITTLE_GEM_CAESAR.textContent = "LITTLE GEM CAESAR 13";
  const LITTLE_GEM_CAESAR_SubText = document.createElement("p");
  LITTLE_GEM_CAESAR_SubText.classList.add("subText");
  LITTLE_GEM_CAESAR_SubText.textContent = "shaved parmesan, croutons";
  LITTLE_GEM_CAESAR.appendChild(LITTLE_GEM_CAESAR_SubText);
  saladsContent.appendChild(LITTLE_GEM_CAESAR);

  const STRAWBERRY_KALE = document.createElement("p");
  STRAWBERRY_KALE.textContent = "STRAWBERRY & KALE 15";
  const STRAWBERRY_KALE_SubText = document.createElement("p");
  STRAWBERRY_KALE_SubText.classList.add("subText");
  STRAWBERRY_KALE_SubText.textContent =
    "farro, snap pea, golden raisin, smoked almond, goat cheese, poppyseed vinaigrette";
  STRAWBERRY_KALE.appendChild(STRAWBERRY_KALE_SubText);
  saladsContent.appendChild(STRAWBERRY_KALE);

  const CHOPPED_CHICKEN = document.createElement("p");
  CHOPPED_CHICKEN.textContent = "CHOPPED CHICKEN 16.5";
  const CHOPPED_CHICKEN_SubText = document.createElement("p");
  CHOPPED_CHICKEN_SubText.classList.add("subText");
  CHOPPED_CHICKEN_SubText.textContent =
    "avocado, bacon, heirloom tomato, white cheddar, deviled egg, bacon bbq ranch";
  CHOPPED_CHICKEN.appendChild(CHOPPED_CHICKEN_SubText);
  saladsContent.appendChild(CHOPPED_CHICKEN);

  const WEDGED_ICEBERG = document.createElement("p");
  WEDGED_ICEBERG.textContent = "WEDGED ICEBERG 14.5";
  const WEDGED_ICEBERG_SubText = document.createElement("p");
  WEDGED_ICEBERG_SubText.classList.add("subText");
  WEDGED_ICEBERG_SubText.textContent =
    "maple glazed bacon, heirloom cherry tomato, avocado, crouton, blue cheese dressing";
  WEDGED_ICEBERG.appendChild(WEDGED_ICEBERG_SubText);
  saladsContent.appendChild(WEDGED_ICEBERG);

  // ENTREES
  const entreesFieldset = document.createElement("fieldset");
  entreesFieldset.classList.add("fieldset");
  content.appendChild(entreesFieldset);

  // Legend
  const entreesLegend = document.createElement("legend");
  entreesLegend.classList.add("legend");
  entreesLegend.innerText = "ENTRÉES";
  entreesFieldset.appendChild(entreesLegend);

  // Content
  const entreesContent = document.createElement("div");
  entreesContent.classList.add("contentSection");
  entreesFieldset.appendChild(entreesContent);

  const HOUR_PORK_RIBS = document.createElement("p");
  HOUR_PORK_RIBS.textContent = "36-HOUR PORK RIBS 27";
  const HOUR_PORK_RIBS_SubText = document.createElement("p");
  HOUR_PORK_RIBS_SubText.classList.add("subText");
  HOUR_PORK_RIBS_SubText.textContent = "jalapeño, molasses, fries";
  HOUR_PORK_RIBS.appendChild(HOUR_PORK_RIBS_SubText);
  entreesContent.appendChild(HOUR_PORK_RIBS);

  const MEATLOAF = document.createElement("p");
  MEATLOAF.textContent = "MA...THE MEATLOAF!?! 18";
  const MEATLOAF_SubText = document.createElement("p");
  MEATLOAF_SubText.classList.add("subText");
  MEATLOAF_SubText.textContent = "green bean, smashed potato, gravy";
  MEATLOAF.appendChild(MEATLOAF_SubText);
  entreesContent.appendChild(MEATLOAF);

  const RAINBOW_TROUT = document.createElement("p");
  RAINBOW_TROUT.textContent = "RAINBOW TROUT 23";
  const RAINBOW_TROUT_SubText = document.createElement("p");
  RAINBOW_TROUT_SubText.classList.add("subText");
  RAINBOW_TROUT_SubText.textContent =
    "frenched green bean, toasted almond, caramelized shallot, lemon brown butter";
  RAINBOW_TROUT.appendChild(RAINBOW_TROUT_SubText);
  entreesContent.appendChild(RAINBOW_TROUT);

  const STEAK_FRITES = document.createElement("p");
  STEAK_FRITES.textContent = "STEAK FRITES* 29.5";
  const STEAK_FRITES_SubText = document.createElement("p");
  STEAK_FRITES_SubText.classList.add("subText");
  STEAK_FRITES_SubText.textContent =
    "prime skirt steak, black truffle butter, french frie";
  STEAK_FRITES.appendChild(STEAK_FRITES_SubText);
  entreesContent.appendChild(STEAK_FRITES);

  const MADE_TO_ORDER_LASAGNA = document.createElement("p");
  MADE_TO_ORDER_LASAGNA.textContent = "MADE TO ORDER LASAGNA 17";
  const MADE_TO_ORDER_LASAGNA_SubText = document.createElement("p");
  MADE_TO_ORDER_LASAGNA_SubText.classList.add("subText");
  MADE_TO_ORDER_LASAGNA_SubText.textContent =
    "summer corn, spinach ricotta, mozzarella, pomodoro, garlic ciabatta";
  MADE_TO_ORDER_LASAGNA.appendChild(MADE_TO_ORDER_LASAGNA_SubText);
  entreesContent.appendChild(MADE_TO_ORDER_LASAGNA);

  const FRIED_CHICKEN = document.createElement("p");
  FRIED_CHICKEN.textContent = "FRIED CHICKEN 18.5";
  const FRIED_CHICKEN_SubText = document.createElement("p");
  FRIED_CHICKEN_SubText.classList.add("subText");
  FRIED_CHICKEN_SubText.textContent =
    "Buttermilk biscuit, smashed potato, gravy (be patient - it's worth it!)";
  FRIED_CHICKEN.appendChild(FRIED_CHICKEN_SubText);
  entreesContent.appendChild(FRIED_CHICKEN);

  const SPICY_KOREAN_SKIRT_STEAK = document.createElement("p");
  SPICY_KOREAN_SKIRT_STEAK.textContent = "SPICY KOREAN SKIRT STEAK* 29.5";
  const SPICY_KOREAN_SKIRT_STEAK_SubText = document.createElement("p");
  SPICY_KOREAN_SKIRT_STEAK_SubText.classList.add("subText");
  SPICY_KOREAN_SKIRT_STEAK_SubText.textContent =
    "forbidden rice, zucchini, mushroom, ginger chili sauce";
  SPICY_KOREAN_SKIRT_STEAK.appendChild(SPICY_KOREAN_SKIRT_STEAK_SubText);
  entreesContent.appendChild(SPICY_KOREAN_SKIRT_STEAK);

  const BEER_BATTERED_FISH = document.createElement("p");
  BEER_BATTERED_FISH.textContent = "BEER BATTERED FISH & CHIPS 18";
  const BEER_BATTERED_FISH_SubText = document.createElement("p");
  BEER_BATTERED_FISH_SubText.classList.add("subText");
  BEER_BATTERED_FISH_SubText.textContent = "coleslaw, tartar sauce";
  BEER_BATTERED_FISH.appendChild(BEER_BATTERED_FISH_SubText);
  entreesContent.appendChild(BEER_BATTERED_FISH);

  const SPICY_VEGAN_CURRY = document.createElement("p");
  SPICY_VEGAN_CURRY.textContent = "SPICY VEGAN CURRY 17";
  const SPICY_VEGAN_CURRY_SubText = document.createElement("p");
  SPICY_VEGAN_CURRY_SubText.classList.add("subText");
  SPICY_VEGAN_CURRY_SubText.textContent =
    "griddled sweet potato, eggplant, snap pea, cauliflower, shiitake mushroom, black rice";
  SPICY_VEGAN_CURRY.appendChild(SPICY_VEGAN_CURRY_SubText);
  entreesContent.appendChild(SPICY_VEGAN_CURRY);

  const ROASTED_SALMON = document.createElement("p");
  ROASTED_SALMON.textContent = "ROASTED SALMON* 26.5";
  const ROASTED_SALMON_SubText = document.createElement("p");
  ROASTED_SALMON_SubText.classList.add("subText");
  ROASTED_SALMON_SubText.textContent =
    "creamy farro, sweet corn, blistered tomato, asparagus, garden herb pesto";
  ROASTED_SALMON.appendChild(ROASTED_SALMON_SubText);
  entreesContent.appendChild(ROASTED_SALMON);

  return content;
}

export default generateMenu;
