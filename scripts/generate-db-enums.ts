import fs from "node:fs";
import { Project, Type } from "ts-morph";

const DATABASE_FILE = "database.types.ts";
const OUTPUT_FILE = "database-enums.ts";

const project = new Project({
  skipAddingFilesFromTsConfig: true,
});

const sourceFile = project.addSourceFileAtPath(DATABASE_FILE);

function pascalCase(input: string) {
  return input
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function extractUnion(type: Type): string[] {
  if (!type.isUnion()) return [];

  return type
    .getUnionTypes()
    .map((t) => t.getLiteralValue())
    .filter((v): v is string => typeof v === "string");
}

const databaseType = sourceFile.getTypeAliasOrThrow("Database").getType();

const enumsType = databaseType
  .getPropertyOrThrow("public")
  .getTypeAtLocation(sourceFile)
  .getPropertyOrThrow("Enums")
  .getTypeAtLocation(sourceFile);

const output: string[] = ["// AUTO-GENERATED", "// DO NOT EDIT", ""];

for (const prop of enumsType.getProperties()) {
  const enumName = pascalCase(prop.getName());

  const enumType = prop.getTypeAtLocation(sourceFile);

  const values = extractUnion(enumType);

  if (!values.length) continue;

  output.push(`export enum ${enumName} {`);

  for (const value of values) {
    const key = pascalCase(value);

    output.push(`  ${key} = "${value}",`);
  }

  output.push("}");
  output.push("");
}

fs.writeFileSync(OUTPUT_FILE, output.join("\n"));

console.log(`Generated ${OUTPUT_FILE}`);
