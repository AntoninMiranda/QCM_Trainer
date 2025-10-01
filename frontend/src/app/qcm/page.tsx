// src/app/qcm/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "@/api";
import { Card, CardHeader, CardContent, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type QuestionType = {
    id: number;
    question: string;
    choices: Record<string, string>;
    answer: string;
};

function QuestionModule({ question }: { question: any }) {
    if (!question) return <Card><CardContent>Aucune question</CardContent></Card>;
    return (
        <Card>
            <CardHeader>
                <h2 className="text-lg font-bold">{question.question}</h2>
            </CardHeader>
            <CardAction>
                {Object.entries(question.choices).map(([key, value]) => (
                    <Button key={key} variant="outline">
                        {key} : {value}
                    </Button>
                ))}
            </CardAction>
        </Card>
    );
}

export default function QcmPage() {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        getData("5")
            .then((res) => setData(res))
            .catch((err) => setError(err.message));
    }, []);

    const nextQuestion = () => {
        if (currentIndex + 1 >= data.length) {
            router.push("/");
        } else {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                {error && <p>Erreur: {error}</p>}
                <QuestionModule question={data[currentIndex]} />
                <button onClick={nextQuestion}>
                    {currentIndex + 1 >= data.length ? "Terminer" : "Question suivante"}
                </button>
            </div>
        </div>
    );
}
