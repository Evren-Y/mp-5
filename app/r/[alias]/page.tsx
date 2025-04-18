import { redirect } from "next/navigation";
import { getUrlByAlias } from "@/lib/getUrlByAlias";

export default async function RedirectPage({
  params,
}: {
  params: { alias: string };
}) {
  const url = await getUrlByAlias(params.alias);

  if (!url) {
    redirect("/");
  }

  redirect(url);
}
