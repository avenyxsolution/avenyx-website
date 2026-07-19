interface Props {
  badge: string;
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}