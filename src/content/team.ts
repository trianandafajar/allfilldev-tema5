export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export const teamMembers: readonly TeamMember[] = [
  { name: "Anna Charline", role: "Pengembang Web", image: "/images/team/2.webp" },
  { name: "John Smith", role: "Pengembang Web", image: "/images/team/3.webp" },
];
