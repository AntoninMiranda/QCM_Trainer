// src/app/qcm/result/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage() {
    console.log("coucu")
    const searchParams = useSearchParams();
    const score = Number(searchParams.get("score") || 0);
    const total = Number(searchParams.get("total") || 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Résultat du QCM</h1>
            <p className="text-lg mb-2">
                Vous avez obtenu {score} / {total} bonnes réponses.
            </p>
            {score === total ? (
                <p className="text-green-600 font-semibold">Félicitations, score parfait !</p>
            ) : (
                <p className="text-blue-600">Essayez encore pour améliorer votre score.</p>
            )}
        </div>
    );
}