import { useState, type CSSProperties } from "react";
import { toolGroups } from "../data/profile";

export function Toolkit() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="space-y-7">
      {toolGroups.map((group) => (
        <div key={group.title}>
          <h3 className="meta mb-3">{group.title}</h3>
          <ul className="relative flex flex-wrap gap-3" aria-label={group.title}>
            {group.tools.map((tool) => (
              <li key={tool.icon}>
                <button type="button" className="tool-tile" aria-label={tool.name}
                  aria-describedby={active === tool.icon ? `tip-${tool.icon}` : undefined}
                  style={{ "--tool-color": tool.color } as CSSProperties}
                  onMouseEnter={() => setActive(tool.icon)} onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(tool.icon)} onBlur={() => setActive(null)}
                  onClick={() => setActive(tool.icon)}
                  onKeyDown={(e) => { if (e.key === "Escape") setActive(null); }}>
                  <span aria-hidden="true" className="tool-mark"
                    style={{ maskImage: `url(/icons/${tool.icon}.svg)`, WebkitMaskImage: `url(/icons/${tool.icon}.svg)` }} />
                </button>
                {active === tool.icon && (
                  <span role="tooltip" id={`tip-${tool.icon}`} className="tool-tooltip">
                    <span className="block font-medium">{tool.name}</span>
                    <span className="block text-sage text-xs mt-0.5">{tool.use}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
