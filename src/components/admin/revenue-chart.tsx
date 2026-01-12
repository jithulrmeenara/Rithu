"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data - in production, this would come from the database
const data = [
    { date: "Jan 1", revenue: 45000 },
    { date: "Jan 5", revenue: 52000 },
    { date: "Jan 10", revenue: 48000 },
    { date: "Jan 15", revenue: 61000 },
    { date: "Jan 20", revenue: 58000 },
    { date: "Jan 25", revenue: 67000 },
    { date: "Jan 30", revenue: 72000 },
];

export function RevenueChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                    dataKey="date"
                    stroke="#6b7280"
                    fontSize={12}
                />
                <YAxis
                    stroke="#6b7280"
                    fontSize={12}
                    tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                    formatter={(value: number) => [`₹${value.toLocaleString("en-IN")}`, "Revenue"]}
                    contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "0.5rem",
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#1a4749"
                    strokeWidth={2}
                    dot={{ fill: "#D4AF37", r: 4 }}
                    activeDot={{ r: 6 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
