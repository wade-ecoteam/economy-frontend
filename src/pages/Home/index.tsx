import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>Home</div>
      <Link href={"/login"}>
        <button>로그인</button>
      </Link>
    </>
  );
}
