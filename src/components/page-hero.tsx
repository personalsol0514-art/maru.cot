import Link from "next/link";

export default function PageHero({ en, title }: { en: string; title: string }) {
  return (
    <div className="page-hero">
      <div className="container">
        <span className="page-hero-en">{en}</span>
        <h1 className="page-hero-title">{title}</h1>
        <ol className="breadcrumb">
          <li>
            <Link href="/">トップ</Link>
          </li>
          <li>{title}</li>
        </ol>
      </div>
    </div>
  );
}
