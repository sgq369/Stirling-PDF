import { Icon } from "@editor/ui/Icon";
import "@editor/components/shared/BrandMark.css";

interface BrandMarkProps {
  /** Height of the mark (CSS length). */
  height?: string;
  className?: string;
}

/**
 * The Qinlv logo mark, rendered inline (not as an <img>) so its two paths can
 * take the brand fills from CSS. At rest it is the two-tone teal 钦 glyph:
 * left radical (钅) in the soft mark colour, right part (欠) in the deep one.
 * See BrandMark.css for the fill mapping.
 */
export function BrandMark({ height = "1.6rem", className }: BrandMarkProps) {
  return (
    <Icon
      name="stirling-mark"
      size={height}
      className={`sui-brandmark${className ? ` ${className}` : ""}`}
      title="Qinlv PDF"
    />
  );
}
