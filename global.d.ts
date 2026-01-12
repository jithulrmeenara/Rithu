/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}

// Fix React 19 hook exports
declare module 'react' {
    export * from 'react/experimental';
}

declare module 'react-dom' {
    export * from 'react-dom/experimental';
}

export { };
