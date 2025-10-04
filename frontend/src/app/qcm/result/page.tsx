// src/app/qcm/result/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardAction, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResultPage() {
    console.log("coucu")
    const router = useRouter();
    const searchParams = useSearchParams();
    const score = Number(searchParams.get("score") || 0);
    const total = Number(searchParams.get("total") || 0);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Résultat du QCM</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-2">
                        Vous avez obtenu {score} / {total} bonnes réponses.
                    </p>
                    {score === total ? (
                        <p className="text-green-600 font-semibold">Félicitations, score parfait !</p>
                    ) : (
                        <p className="text-blue-600">Essayez encore pour améliorer votre score.</p>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={() => router.push("/")}>Accueil</Button>
                    <Button onClick={() => router.push(`/qcm?nbQuestions=${total}`)}>Recommencer</Button>
                </CardFooter>
            </Card>
        </div>
    );
}