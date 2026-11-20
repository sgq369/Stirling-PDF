import { Logo } from "@editor/ui/Logo";

export interface SidebarHeaderProps {
  className?: string;
}

/** The wordmark, with a link back to the main site underneath it. */
export function SidebarHeader({ className }: SidebarHeaderProps) {
  return (
    <div className={`file-sidebar-header${className ? ` ${className}` : ""}`}>
      <Logo variant="textOnly" textHeight="1.3rem" />
      <a className="file-sidebar-header__back" href="https://sungongqin.com">
        ← 返回钦律亲为
      </a>
    </div>
  );
}
