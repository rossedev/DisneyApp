import { categories, listContent } from "@/config/mock";
import { ReactNode, createContext, useContext } from "react";

interface ICategoryContextValue {
  categories: any[];
  contentslist: any[];
}

export const CategoryContext = createContext<ICategoryContextValue | null>(
  null
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CategoryContext.Provider value={{ categories, contentslist: listContent }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
