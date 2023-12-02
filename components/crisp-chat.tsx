"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("fc97aaf5-cd4b-45f6-80f9-20a7cd1952ea");
    }, []);

    return null;
};