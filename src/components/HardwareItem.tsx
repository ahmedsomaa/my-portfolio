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
    <a
      href={href}
      className="flex flex-col min-h-28 justify-between border border-gray-50/5 hover:border hover:border-gray-50/15 p-2 rounded-lg"
    >
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </a>
  );
};
