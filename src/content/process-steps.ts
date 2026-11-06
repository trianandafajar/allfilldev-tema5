import { House, MessagesSquare, PencilRuler, Wrench, type LucideIcon } from "lucide-react";

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: MessagesSquare,
    title: "Konsultasi",
    description:
      "Kami membahas kebutuhan, gaya, dan tujuan Anda agar visi serta kebutuhan ruang Anda dipahami dengan jelas.",
  },
  {
    icon: PencilRuler,
    title: "Desain Konsep",
    description:
      "Tim kami menyusun konsep, tata letak, dan mood board yang detail, disesuaikan dengan gaya hidup dan selera Anda.",
  },
  {
    icon: Wrench,
    title: "Pelaksanaan",
    description:
      "Kami mewujudkan desain dengan material berkualitas, pengerjaan terampil, dan manajemen project yang presisi.",
  },
  {
    icon: House,
    title: "Serah Terima",
    description:
      "Ruang Anda diserahkan dalam kondisi rampung dan indah, siap dinikmati dengan nyaman dan bergaya.",
  },
];
