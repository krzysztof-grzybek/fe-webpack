export function inlineExport() {}
function nonInlineExport() {}

export const UNLUCKY_NUMBER = 13;
const SOME_NAME = 'some-name';

function defaultExportedFunction() {}

export default defaultExportedFunction;
export { nonInlineExport, SOME_NAME }