export const getModalValue = (state: boolean, value?: boolean) => (typeof value === 'undefined' ? !state : value)
