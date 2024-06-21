import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "./Select";

function SortBy({ options }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", e.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
