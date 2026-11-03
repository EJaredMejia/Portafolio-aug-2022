import { type ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

// Index layout shared by every content section: title on the left, content on the right
const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[13rem_1fr] md:gap-12 md:py-28">
        <h2 className="text-3xl font-bold tracking-tight md:text-2xl">
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
};

export default Section;
