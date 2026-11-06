"use client";

import type { FormEvent } from "react";
import { FieldInput } from "@/components/forms/field-input";
import { FieldTextarea } from "@/components/forms/field-textarea";
import { Button } from "@/components/ui/button";

/** Form "Leave a Comment". Template tidak punya validasi maupun backend untuk form ini. */
export function CommentForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // pengiriman komentar belum tersambung
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment-name" className="inline-block">
        Nama
      </label>
      <FieldInput variant="bordered" type="text" id="comment-name" name="name" />
      <label htmlFor="comment-email" className="inline-block">
        Email
      </label>
      <FieldInput variant="bordered" type="text" id="comment-email" name="email" />
      <label htmlFor="comment-message" className="inline-block">
        Pesan
      </label>
      <FieldTextarea variant="bordered" id="comment-message" name="message" rows={6} />
      <p className="mt-4">
        <Button type="submit" variant="main" size="main">
          Kirim
        </Button>
      </p>
    </form>
  );
}
