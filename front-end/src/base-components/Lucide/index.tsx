import * as lucideIcons from "lucide-react";
import { cn } from "../../../UI/lib/utils";

export const { createReactComponent, ...icons } = lucideIcons;

type Icon = keyof typeof icons;

interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: Icon;
  title?: string;
}

function Lucide(props: LucideProps) {
  const { icon, className, ...computedProps } = props;
  const Component = lucideIcons[props.icon];
  return (
    <Component
      {...computedProps}
      className={cn("stroke-[1.2]", props.className)}
    />
  );
}

export default Lucide;
