
export const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Testante container</h2>
        {children}
        <p>Meu valor: {myValue}</p>
    </div>
  )
}

export default Container
