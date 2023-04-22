
const SomeComp: React.FC<{count: number}> = ({count}) => {
  return (
    <p>
        {count/10}
    </p>
  )
}

export default SomeComp