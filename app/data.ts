// Define the type for benefit items
export interface Benefit {
  title: string;
  description: string;
  src: string;
  color: string;
}

export const benefits: Benefit[] = [
  {
    title: "Classic Denim Jeans with Modern Twist",
    description:
      "Discover our premium denim collection that combines timeless style with contemporary comfort.",
    src: "/images/img 01.png",
    color: "#CEBDF0",
  },
  {
    title: "Urban Street Sneakers Collection",
    description:
      "Step out in style with our latest urban sneakers, perfect for both comfort and fashion.",
    src: "/images/img 02.png",
    color: "#ECF97A",
  },
  {
    title: "Limited Edition Cargo Pants",
    description:
      "Versatile cargo pants that blend functionality with street style for the modern adventurer.",
    src: "/images/img 03.png",
    color: "#C7CBFE",
  },
  {
    title: "High-Performance Running Shoes",
    description:
      "Experience ultimate comfort with our cutting-edge running shoes designed for peak performance.",
    src: "/images/img 04.png",
    color: "#FF7D61",
  },
  {
    title: "Designer Track Pants Collection",
    description:
      "Elevate your casual wear with our premium track pants, where style meets comfort.",
    src: "/images/img 05.png",
    color: "#F99FEC",
  },
];