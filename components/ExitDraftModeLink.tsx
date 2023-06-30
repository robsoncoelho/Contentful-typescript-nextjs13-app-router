"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function ExitDraftModeLink(
  props: React.HTMLProps<HTMLAnchorElement>
) {
  const pathname = usePathname();
  return (
    <div className="bg-ts-error text-black py-2 text-center text-sm">
      This is page is a preview.{" "}
      <a
        href={`/api/disable-draft?redirect=${pathname}`}
        {...props}
        className="underline hover:text-cyan duration-200 transition-colors">
        Click here
      </a>{" "}
      to exit preview mode.
    </div>
  );
}
