import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatar01 from "@/assets/favicon-removebg.png";
import Avatar02 from "@/assets/favicon-removebg.png";
import Avatar03 from "@/assets/favicon-removebg.png";

export default function SelectDemo() {
  return (
    <Select defaultValue="s1">
      <SelectTrigger
        id="select-38"
        className="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent className="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2">
        <SelectGroup>
          <SelectLabel className="ps-2">Impersonate user</SelectLabel>
          <SelectItem value="s1">
            <img
              className="size-5 rounded"
              src={Avatar01}
              alt="Frank Allison"
              width={20}
              height={20}
            />
            <span className="truncate">Jenny Hamilton</span>
          </SelectItem>
          <SelectItem value="s2">
            <img
              className="size-5 rounded"
              src={Avatar02}
              alt="Xavier Guerra"
              width={20}
              height={20}
            />
            <span className="truncate">Paul Smith</span>
          </SelectItem>
          <SelectItem value="s3">
            <img
              className="size-5 rounded"
              src={Avatar03}
              alt="Anne Kelley"
              width={20}
              height={20}
            />
            <span className="truncate">Luna Williams</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
