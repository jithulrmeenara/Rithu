"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email().readonly(), // Email usually shouldn't be changed easily
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
    const { data: session, update } = useSession();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: session?.user?.name || "",
            email: session?.user?.email || "",
        },
    });

    async function onSubmit(data: ProfileFormValues) {
        setIsLoading(true);
        try {
            // In a real app, you would call an API route here to update the user in the database
            // await fetch('/api/user/profile', { method: 'PATCH', body: JSON.stringify(data) })

            // Simulating an update for now
            await update({ name: data.name });
            alert("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            alert("Failed to update profile.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="font-heading text-2xl font-bold text-text-primary">Profile Settings</h1>
                <p className="text-text-secondary">Update your personal information</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Your name and contact details used for checkout.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                {...form.register("email")}
                                disabled
                                className="bg-primary-50"
                            />
                            <p className="text-[10px] text-text-secondary">Email cannot be changed directly.</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" {...form.register("name")} />
                            {form.formState.errors.name && (
                                <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
                            )}
                        </div>

                        <Button type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
