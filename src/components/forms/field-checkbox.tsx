"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FieldCheckboxProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

/** Padanan `div.d-checkbox`: kotak centang + label. */
export function FieldCheckbox({
  id,
  name,
  value,
  label,
  checked,
  onCheckedChange,
}: FieldCheckboxProps) {
  return (
    <div className="flex items-center">
      <Checkbox
        id={id}
        name={name}
        value={value}
        checked={checked}
        onCheckedChange={(state) => onCheckedChange(state === true)}
        className="mr-1 size-[13px] rounded-[2px] border-menu bg-white data-checked:border-primary data-checked:bg-primary [&_svg]:size-[11px]"
      />
      <Label
        htmlFor={id}
        className="inline-block cursor-default text-base leading-[30px] font-normal"
      >
        {label}
      </Label>
    </div>
  );
}
