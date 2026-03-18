import type { ProgressionBlock } from "@/data/types";
import { MechanicSpotlight } from "./MechanicSpotlight";
import { ProTipBox } from "./ProTipBox";
import { WarningBox } from "./WarningBox";
import { LoreNote } from "./LoreNote";
import { ResourceTable } from "./ResourceTable";
import { QuickRef } from "./QuickRef";
import { ImageCard } from "./ImageCard";
import { Checklist } from "./Checklist";

interface ProgressionRendererProps {
  blocks: ProgressionBlock[];
}

export function ProgressionRenderer({ blocks }: ProgressionRendererProps) {
  return (
    <div className="space-y-1">
      {blocks.map((block, i) => (
        <ProgressionBlock key={i} block={block} />
      ))}
    </div>
  );
}

function ProgressionBlock({ block }: { block: ProgressionBlock }) {
  switch (block.type) {
    case "text":
      return (
        <p className="text-[15px] leading-relaxed text-dune-cream/85 lg:text-base">
          {block.content}
        </p>
      );

    case "heading": {
      const Tag = block.level === 2 ? "h2" : block.level === 3 ? "h3" : "h4";
      const sizes = {
        2: "mt-12 mb-4 text-2xl lg:text-3xl",
        3: "mt-8 mb-3 text-lg lg:text-xl",
        4: "mt-6 mb-2 text-base",
      };
      return <Tag className={sizes[block.level || 3]}>{block.content}</Tag>;
    }

    case "mechanic-spotlight":
      return (
        <MechanicSpotlight
          mechanicId={block.mechanicId!}
          contextNote={block.contextNote}
        />
      );

    case "pro-tip":
      return <ProTipBox title={block.title} text={block.text!} />;

    case "warning":
      return <WarningBox title={block.title} text={block.text!} />;

    case "lore-note":
      return <LoreNote text={block.loreText!} source={block.source} />;

    case "resource-table":
      return <ResourceTable title={block.title} resources={block.resources!} />;

    case "quick-ref":
      return <QuickRef label={block.refLabel!} target={block.refTarget!} />;

    case "image":
      return (
        <ImageCard
          src={block.imageUrl!}
          caption={block.caption}
          attribution={block.attribution}
        />
      );

    case "checklist":
      return <Checklist title={block.title} items={block.items!} />;

    default:
      return null;
  }
}
