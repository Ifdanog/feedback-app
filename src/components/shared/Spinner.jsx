import spinner from '../assets/loading-gif.gif'

function Spinner() {
  return (
    <img src={spinner} alt="Loading..." style={{ width: '60%', marginLeft: '20%', dsiplay: 'block' }} />
  )
}

export default Spinner
