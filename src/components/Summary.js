function Summary(props) {
  return (<div className='form-1'>
    
       <h1>Thanks for your submission!</h1>
      <ul>
    <li>The protein you like: {props.info.patty}</li>
    <li>Number of patties: {props.info.amount}</li>
    <li>The topping you choose: {props.info.topping}</li>
    <li>Extra cheese: {props.info.cheese}</li>
    <li>The bun type: {props.info.bun}</li>
    <li>Sauces: {props.info.sauce}</li>
    <li>Anything extra: {props.info.extra}</li>
    </ul>
  </div>
 
  )
}
// this.state = {
// ,
//   patty:'',
//   amount: '',
//   doneness: '',
//   topping: '',
//   cheese: '',
//   bun: '',
//   sauce: '',
//   extra: '',
export default Summary;