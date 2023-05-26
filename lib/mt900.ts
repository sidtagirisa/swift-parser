import { StatementVisitor } from "./statementVisitor";
import { Tag } from "./tags";

export function buildStatement({ group }: { group: Tag[] }) {
  const visitor = new StatementVisitor();
  group.forEach((tag) => tag.accept(visitor));
  return visitor.toStatement();
}

export function validateGroup() {
  return true; // No validation will be performed for now
}
