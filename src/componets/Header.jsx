import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  
  const onClick = () => {
    console.count('Click')
  }
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header