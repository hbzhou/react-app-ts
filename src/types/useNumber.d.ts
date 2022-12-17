import { useNumber } from "../hooks/hooks";

declare type UseNumberValue = ReturnType<typeof useNumber>[0];
declare type UseNumberSetValue = ReturnType<typeof useNumber>[1];
