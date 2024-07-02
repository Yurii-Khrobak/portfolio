export default function MyButton({children, ...props}) {
  return(
    <button className='myBtn' {...props}>{children}</button>
  )
}
