import * as React from "react";
import { cn } from "../lib/utils";

export function MenuDivider(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400",
        props.className
      )}
    />
  );
}

export function MenuHeader(
  props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">
) {
  return (
    <div {...props} className={cn("p-2 font-medium", props.className)}>
      {props.children}
    </div>
  );
}

export function MenuFooter(
  props: React.PropsWithChildren & React.ComponentPropsWithoutRef<"div">
) {
  return (
    <div {...props} className={cn("flex p-1", props.className)}>
      {props.children}
    </div>
  );
}
