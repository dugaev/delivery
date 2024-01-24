"use client";
import React, { useRef, useState } from "react";
import MenuTag from "./MenuTag";
import MenuCard from "./MenuCard";
import { motion, useInView } from "framer-motion";
const MenuData = [
  {
    id: 1,
    title: "Burger Dreams",
    description: "Burger Dreams",
    image: "/img/Burger1.png",
    tag: ["Burgers"],
    price: "9.20",
  },
  {
    id: 2,
    title: "Burger Waldo",
    description: "Burger Waldo",
    image: "/img/Burger2.png",
    tag: ["Burgers"],
    price: "10.00",
  },

  {
    id: 3,
    title: "Burger Cali",
    description: "Burger Cali",
    image: "/img/Burger3.png",
    tag: ["Burgers"],
    price: "8.00",
  },
  {
    id: 4,
    title: "Burger Bacon",
    description: "Burger Bacon Buddy",
    image: "/img/Burger4.png",
    tag: ["Burgers"],
    price: "9.99",
  },
  {
    id: 5,
    title: "Burger Spicy",
    description: "Burger Spicy",
    image: "/img/Burger5.png",
    tag: ["Burgers"],
    price: "9.20",
  },
  {
    id: 6,
    title: "Burger Classic",
    description: "Burger Classic",
    image: "/img/Burger6.png",
    tag: ["Burgers"],
    price: "8.00",
  },
  {
    id: 7,
    title: "Shawarma",
    description: "Shawarma Classic",
    image: "/img/shawa.png",
    tag: ["Sides"],
    price: "6.99",
  },
  {
    id: 8,
    title: "Hot Dog",
    description: "Hot Dog Classic",
    image: "/img/hotdog.png",
    tag: ["Sides"],
    price: "7.00",
  },
  {
    id: 9,
    title: "Macaroons",
    description: "Macaroons",
    image: "/img/macaroons.jpg",
    tag: ["Sides"],
    price: "12.00",
  },
  {
    id: 10,
    title: "Sprite",
    description: "Sprite",
    image: "/img/sprite.png",
    tag: ["Drinks"],
    price: "5.00",
  },
  {
    id: 11,
    title: "Fanta",
    description: "Fanta Orange",
    image: "/img/fanta.png",
    tag: ["Drinks"],
    price: "5.00",
  },
  {
    id: 12,
    title: "Coca Cola",
    description: "Coca Cola",
    image: "/img/cola.png",
    tag: ["Drinks"],
    price: "5.00",
  },
  {
    id: 13,
    title: "Burger Bacon",
    description: "Burger Bacon Buddy",
    image: "/img/Burger4.png",
    tag: ["Burgers"],
    price: "9.99",
  },
  {
    id: 14,
    title: "Burger Waldo",
    description: "Burger Waldo",
    image: "/img/Burger2.png",
    tag: ["Burgers"],
    price: "10.00",
  },
  {
    id: 15,
    title: "Burger Classic",
    description: "Burger Classic",
    image: "/img/Burger6.png",
    tag: ["Burgers"],
    price: "8.00",
  },
];

const Menu = () => {
  const [tag, setTag] = useState("Burgers");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredMenuItems = MenuData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <section
        ref={ref}
        id="projects"
        className="mt-[130px] lg:mt-[250px] mb-[50px] "
      >
        <h1 className="text-[44px] lg:text-[50px] text-center text-[#35B8BE]">
          Browse our menu
        </h1>
        <p className="text-[#546285] text-[16px] text-center mt-[26px]">
          Use our menu to place an order online, or{" "}
          <span className="text-[#35B8BE] text-[16px] hover:underline cursor-pointer">
            phone
          </span>{" "}
          our store <br /> to place a pickup order. Fast and fresh food.
        </p>
        <div className="flex flex-row justify-center items-center gap-2 py-6 mx-3">
          <MenuTag
            onClick={handleTagChange}
            name="Burgers"
            isSelected={tag === "Burgers"}
          />
          <MenuTag
            onClick={handleTagChange}
            name="Sides"
            isSelected={tag === "Sides"}
          />
          <MenuTag
            onClick={handleTagChange}
            name="Drinks"
            isSelected={tag === "Drinks"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredMenuItems.map((menu, index) => (
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              key={index}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <MenuCard
                key={menu.id}
                title={menu.title}
                description={menu.description}
                imgURL={menu.image}
                price={menu.price}
              />
            </motion.li>
          ))}
        </ul>
        <div className="text-center mt-[50px]">
          <button className="bg-[#35B8BE] text-white px-[35px] py-[20px] rounded-[6px] hover:scale-110 transition">
            See Full Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
