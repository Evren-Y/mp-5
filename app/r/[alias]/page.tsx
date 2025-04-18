import { redirect } from "next/navigation";
import { getUrlByAlias } from "@/lib/getUrlByAlias";

export default async function RedirectPage(props: { params: { alias: string } }) {
    const alias = props.params.alias;
    const url = await getUrlByAlias(alias);
  
    if (!url) {
      redirect("/");
    }
  
    redirect(url);
  }
  
