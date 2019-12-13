import { connect } from 'dva';
function home() {
  return <h1>home</h1>;
}

function mapStateToProps({ userInfo }) {
  return { userInfo };
}
export default connect(mapStateToProps)(home);
