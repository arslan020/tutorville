import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const content = await getContent();

  return (
    <>
      <Header site={content.site} nav={content.nav} />
      {children}
      <Footer site={content.site} />
    </>
  );
}
