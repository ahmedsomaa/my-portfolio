interface HardwareItemProps {
  href: string;
  title: string;
  description: string;
}
export const HardwareItem = ({
  href,
  title,
  description,
}: HardwareItemProps) => {
  return (
    <div className="flex flex-col min-h-36 justify-between">
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-neutral-400">{description}</p>
      </div>
      <a target="_blank" href={href} className="hover:underline">
        Learn more
      </a>
    </div>
  );
};
