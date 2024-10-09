
export const Type = ({ types }) => {
  return (
    <div>
      {types.map((type, index) => (
        <div key={index}>{type}</div>
      ))}
    </div>
  )
}