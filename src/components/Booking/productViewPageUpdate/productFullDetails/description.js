import React from 'react'

//redux
import {useSelector} from 'react-redux'

//css
let descripStyle = {
    fontSize: '1rem',
    letterSpacing: .5,
    color: '#eeeeee',
    lineHeight: 1.3,
    textAlign:'left'
}



export default ({ attributes }) => {
    
    let productItemDesc = useSelector(state => state.productItem.productItemDescription)

    return (
        <div className='p-2 mb-5'>
            <h3 style={{color: '#eeeeee' , textAlign:'left' , margin: '1.4rem 0'}}>Description</h3>
            <section className='p-2'>
            <h6 style={descripStyle}>{productItemDesc}</h6>
            {/* <h6 style={descripStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6> */}
            </section>
        </div>
    )
}