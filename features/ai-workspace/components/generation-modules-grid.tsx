import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generationModules } from "@/features/ai-workspace/data/workspace-content";
import { cn } from "@/lib/utils";

export function GenerationModulesGrid() {
  return (
    <div
      id="generation"
      className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
    >
      {generationModules.map((module) => (
        <Card key={module.name} className="p-1 shadow-sm">
          <CardHeader>
            <div className={cn("mb-2 h-1.5 w-12 rounded-full", module.accent)} />
            <CardTitle>{module.name}</CardTitle>
            <CardDescription>{module.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {module.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
