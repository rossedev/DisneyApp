import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICategoryContextValue {
  categories: any[];
  contents: any[];
}

export const CategoryContext = createContext<ICategoryContextValue | null>(
  null
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [contents, setContents] = useState<any[]>([]);
  useEffect(() => {
    const getCategoriesList = async () => {
      const auxCategories: any[] = [];
      const auxContents: any[] = [];

      const categoriesSnap = await getDocs(collection(db, "categories"));
      const contentsSnap = await getDocs(collection(db, "contents"));

      categoriesSnap.forEach((doc: any) => {
        auxCategories.push(doc.data());
      });      

      contentsSnap.forEach((doc: any) => {
        auxContents.push(doc.data());
      });

      setCategories(auxCategories);
      setContents(auxContents);
    };
    getCategoriesList();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, contents }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
