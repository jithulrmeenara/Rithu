import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
}

export function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
    const isWarning = trend === "warning";
    const isPositive = trend && trend.startsWith("+");

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">{title}</p>
                        <p className="text-2xl font-light font-heading text-[#1a4749] mt-2">
                            {value}
                        </p>
                        {trend && trend !== "ok" && trend !== "warning" && (
                            <p className={cn(
                                "text-xs mt-1",
                                isPositive ? "text-green-600" : "text-red-600"
                            )}>
                                {trend} from last month
                            </p>
                        )}
                        {isWarning && (
                            <p className="text-xs mt-1 text-orange-600">
                                Needs attention
                            </p>
                        )}
                    </div>
                    <div className={cn(
                        "p-3 rounded-lg",
                        isWarning ? "bg-orange-100" : "bg-[#FDFBF7]"
                    )}>
                        <Icon className={cn(
                            "h-6 w-6",
                            isWarning ? "text-orange-600" : "text-[#D4AF37]"
                        )} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
