interface ParamsType {
  firstName: string
  lastName: string
}

export const getFullName = ({ firstName, lastName }: ParamsType) => {
  return firstName || lastName ? `${firstName} ${lastName}`.trim() : ''
}
