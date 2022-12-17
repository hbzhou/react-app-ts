import { useState } from "react";

export const useNumber = (initialValue: number = 0) => useState<number>(initialValue);
