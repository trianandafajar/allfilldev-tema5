"use client";

import { ChevronDown } from "lucide-react";
import { fieldStyles } from "@/components/forms/form-styles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type FieldSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  options: readonly string[];
  /** string kosong = belum memilih (menampilkan placeholder) */
  value: string;
  onValueChange: (value: string) => void;
  /** padanan kelas `error_input` */
  invalid?: boolean;
  /** dipanggil saat trigger diklik (template menghapus error saat click) */
  onClick?: () => void;
};

/** Pengganti `<select class="form-control">` + ikon panah, memakai shadcn Select. */
export function FieldSelect({
  id,
  name,
  placeholder,
  options,
  value,
  onValueChange,
  invalid,
  onClick,
}: FieldSelectProps) {
  return (
    <div className="relative">
      <Select name={name} value={value} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          aria-invalid={invalid || undefined}
          onClick={onClick}
          className={cn(
            fieldStyles.control,
            "flex items-center justify-between gap-0 text-left whitespace-nowrap data-[size=default]:h-auto data-placeholder:text-ink data-[state=open]:bg-white data-[state=open]:border-primary [&>svg]:hidden",
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 box-content size-4 pt-4 pr-4 text-primary"
      />
    </div>
  );
}
