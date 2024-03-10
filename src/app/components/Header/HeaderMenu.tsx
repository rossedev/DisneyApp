import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <>
      <Link href="/home" shallow>
        Home
      </Link>
      <Link href="/home/movies" shallow>
        Movies
      </Link>
      <Link href="/home/series" shallow>
        Series
      </Link>
      <Link href="/home" shallow>
        My List
      </Link>
    </>
  );
};
