export const bulletListSx = {
  listStyleType: "disc",
  listStylePosition: "outside",
  display: "grid",
  gap: 1,
  color: "text.secondary",
  lineHeight: 1.7,
  "& li": {
    display: "list-item",
  },
  "& li::marker": {
    color: "secondary.main",
  },
} as const;
