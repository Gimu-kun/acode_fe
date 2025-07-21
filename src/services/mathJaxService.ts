export const setMathJax = () => {
    if ((window as any).MathJax) {
        (window as any).MathJax.typesetPromise();
    }
}