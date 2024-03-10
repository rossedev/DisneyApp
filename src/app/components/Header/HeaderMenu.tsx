import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/home/movies">Movies</Link>
      <Link href="/home/series">Series</Link>
      <Link href="/home">My List</Link>
    </>
  );
};
