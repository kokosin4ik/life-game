import { getCurrentDateString } from '../utils';

const getUnreachableCodeErrorMessage = (
    x: never,
    variableName: string,
    description: string,
) => {
    return `Unreachable code for the variable ${variableName}=${x}. Description: ${description}. Date: ${getCurrentDateString()}`;
};

export const assertUnreachableError = (
    x: never,
    variableName: string,
    description: string,
): never => {
    const message = getUnreachableCodeErrorMessage(
        x,
        variableName,
        description,
    );

    throw new Error(message);
};

export const assertUnreachableWarn = (
    x: never,
    variableName: string,
    description: string,
) => {
    const message = getUnreachableCodeErrorMessage(
        x,
        variableName,
        description,
    );

    console.warn(message);
};