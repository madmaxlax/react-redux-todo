import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

//"State" here means the root store
const mapStateToProps = (currentStateOfStore, ownProps) => ({
  active: ownProps.filter === currentStateOfStore.visibilityFilter
})

// mapDispatchToProps when you need access to dispatch functions to interact with props
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
//^^ note that we are sending the Link component to connect
//connect will listen (subscribe) to changes to the store
//there's no actual rendering in this js container file, 
//we just set up some props that will get sent to Link
//i gues the idea is to keep Link as generic as possible

// sneak peak of Link:

// const Link = ({ active, children, onClick }) => (
//   <button
//      onClick={onClick}
//      disabled={active}
//      style={{
//          marginLeft: '4px',
//      }}
//   >
//     {children}
//   </button>
// )

// Link.propTypes = {
// active: PropTypes.bool.isRequired,
// children: PropTypes.node.isRequired,
// onClick: PropTypes.func.isRequired
// }