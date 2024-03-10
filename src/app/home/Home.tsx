"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Card } from "../components/Cards/Card";
import { useState } from "react";
import { useCategoryContext } from "@/context/CategoryContent";
import { ContentCategory } from "../components/ContentCategory";

export interface ICategories {
  name: string;
  title: string;
  img: string;
  description: string;
}

export default function Home() {
  const authContext = useAuthContext();
  const categoryContext = useCategoryContext()
  const [categorySelect, setCategorySelect] = useState<string | null>("");

  const handleSelectCategory = (category: string) => {
    setCategorySelect(category);
  };

  return (
    <div className="h-full">
      <h3 className="text-center font-bold text-xl mt-5 mb-10">
        Welcome! {authContext?.currentUser?.email}
      </h3>

      <h4 className="text-lg mb-2 mt-4">Categories {`>`}</h4>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
        {categoryContext?.categories.map((category: ICategories) => (
          <Card
            key={category.name}
            name={category.name}
            title={category.title}
            description={category.description}
            img={category.img}
            onClickSelect={handleSelectCategory}
          />
        ))}
      </div>

      <div className="">
        {categorySelect && (
          <ContentCategory
            listContent={categoryContext?.contents}
            categorySelect={categorySelect}
          />
        )}
      </div>
    </div>
  );
}
